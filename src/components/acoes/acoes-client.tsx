"use client";

import { useMemo, useState, useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import { Pencil, PlusCircle, Search } from "lucide-react";
import type { RosterMember } from "@/lib/roster";
import { resolveDisplayName } from "@/lib/display-name";
import { canEditHeistRecord } from "@/lib/permissions";
import { useViewAs } from "@/components/view-as-context";
import { useToast } from "@/components/ui/toast";
import { primaryButtonClass } from "@/lib/ui";
import { formatDateOnly, todayDateInputValue } from "@/lib/date-only";
import { HeistDetailModal } from "./heist-detail-modal";
import { HeistFormFields, type HeistFormState } from "./heist-form-fields";
import { HEIST_KIND_LABELS, HEIST_OUTCOME_LABELS, type HeistWithOfficers } from "./heist-types";

const noopSubscribe = () => () => {};

const EMPTY_FORM: HeistFormState = {
  name: "",
  kind: "CONFRONTO_ARMADO",
  outcome: "VITORIA",
  date: "",
};

export function AcoesClient({
  initialHeists,
  officers,
  currentUserId,
}: {
  initialHeists: HeistWithOfficers[];
  officers: RosterMember[];
  currentUserId: string | null;
}) {
  const router = useRouter();
  const { showToast } = useToast();
  const { effectiveRank } = useViewAs();

  const defaultOfficerIds = useMemo(
    () => (currentUserId && officers.some((o) => o.id === currentUserId) ? [currentUserId] : []),
    [currentUserId, officers]
  );

  const [search, setSearch] = useState("");
  const [selectedHeist, setSelectedHeist] = useState<HeistWithOfficers | null>(null);
  const [form, setForm] = useState<HeistFormState>(EMPTY_FORM);
  const [selectedOfficerIds, setSelectedOfficerIds] = useState<string[]>(defaultOfficerIds);
  const [submitting, setSubmitting] = useState(false);

  // An empty `form.date` means "today" in the viewer's timezone. The server
  // snapshot is "" so SSR (in UTC) and the browser agree during hydration.
  const today = useSyncExternalStore(noopSubscribe, todayDateInputValue, () => "");
  const effectiveForm = form.date ? form : { ...form, date: today };

  const filteredHeists = useMemo(() => {
    const q = search.toLowerCase();
    return initialHeists.filter((h) => h.name.toLowerCase().includes(q));
  }, [initialHeists, search]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (selectedOfficerIds.length === 0) {
      showToast("Selecione ao menos um oficial participante!", "error");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch("/api/heists", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, date: form.date || todayDateInputValue(), userIds: selectedOfficerIds }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Falha ao registrar ação.");
      }
      showToast("Ação registrada com sucesso!", "success");
      setForm(EMPTY_FORM);
      setSelectedOfficerIds(defaultOfficerIds);
      router.refresh();
    } catch (err) {
      showToast(err instanceof Error ? err.message : "Erro ao salvar.", "error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-rocam-card p-5 rounded-xl border border-rocam-border space-y-4">
        <div className="border-b border-rocam-border pb-3">
          <h3 className="font-oswald text-base font-bold text-rocam-yellow flex items-center gap-2">
            <PlusCircle className="w-5 h-5" /> Registrar Ação
          </h3>
          <p className="text-xs text-rocam-muted">
            Informe os dados da ação e selecione os oficiais participantes. Quem registra entra
            automaticamente como participante.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <HeistFormFields
            form={effectiveForm}
            setForm={setForm}
            officers={officers}
            selectedOfficerIds={selectedOfficerIds}
            setSelectedOfficerIds={setSelectedOfficerIds}
          />
          <button type="submit" disabled={submitting} className={primaryButtonClass}>
            {submitting ? "Salvando..." : "Registrar Ação"}
          </button>
        </form>
      </div>

      <div className="bg-rocam-card p-5 rounded-xl border border-rocam-border space-y-4 lg:col-span-2">
        <div className="relative">
          <Search className="w-4 h-4 text-rocam-muted absolute left-3 top-3" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por nome da ação..."
            className="w-full bg-rocam-dark border border-rocam-border text-xs rounded-lg pl-9 pr-3 py-2.5 text-slate-200 outline-none focus:border-rocam-yellow"
          />
        </div>
        <div className="space-y-3 max-h-[70vh] overflow-y-auto">
          {filteredHeists.map((h) => (
            <button
              key={h.id}
              type="button"
              onClick={() => setSelectedHeist(h)}
              className="w-full text-left p-4 bg-rocam-dark/70 rounded-xl border border-rocam-border flex items-center justify-between text-xs gap-3 cursor-pointer hover:border-rocam-yellow/50 transition-colors"
            >
              <div className="min-w-0">
                <h4 className="font-bold text-slate-100 truncate">{h.name}</h4>
                <p className="text-rocam-muted truncate">
                  {HEIST_KIND_LABELS[h.kind]} | Oficiais:{" "}
                  {h.officers.map((o) => resolveDisplayName(o.user)).join(", ") || "—"}
                </p>
                <p className="text-rocam-muted">{formatDateOnly(h.date)}</p>
              </div>
              <div className="flex items-center gap-2 shrink-0">
                {currentUserId &&
                  canEditHeistRecord({ id: currentUserId, rank: effectiveRank }, h.createdById) && (
                    <Pencil className="w-3.5 h-3.5 text-rocam-yellow" />
                  )}
                <span
                  className={`px-2 py-0.5 rounded font-bold ${
                    h.outcome === "VITORIA" ? "text-emerald-400 bg-emerald-500/10" : "text-rose-400 bg-rose-500/10"
                  }`}
                >
                  {HEIST_OUTCOME_LABELS[h.outcome]}
                </span>
              </div>
            </button>
          ))}
          {filteredHeists.length === 0 && (
            <p className="text-xs text-rocam-muted italic py-8 text-center">Nenhuma ação registrada.</p>
          )}
        </div>
      </div>

      <HeistDetailModal
        heist={selectedHeist}
        officers={officers}
        canEdit={
          !!selectedHeist &&
          !!currentUserId &&
          canEditHeistRecord({ id: currentUserId, rank: effectiveRank }, selectedHeist.createdById)
        }
        onClose={() => setSelectedHeist(null)}
        onSaved={(updated) => {
          setSelectedHeist(updated);
          router.refresh();
        }}
        onDeleted={() => {
          setSelectedHeist(null);
          router.refresh();
        }}
      />
    </section>
  );
}
