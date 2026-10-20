"use client";

import { useState } from "react";
import { Pencil, Trash2 } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { resolveDisplayName } from "@/lib/display-name";
import type { RosterMember } from "@/lib/roster";
import { useToast } from "@/components/ui/toast";
import { primaryButtonClass } from "@/lib/ui";
import { formatDateOnly, toDateInputValue } from "@/lib/date-only";
import { HeistFormFields, type HeistFormState } from "./heist-form-fields";
import { HEIST_KIND_LABELS, HEIST_OUTCOME_LABELS, type HeistWithOfficers } from "./heist-types";

function formFromHeist(heist: HeistWithOfficers): HeistFormState {
  return {
    name: heist.name,
    kind: heist.kind,
    outcome: heist.outcome,
    date: toDateInputValue(heist.date),
  };
}

export function HeistDetailModal({
  heist,
  officers,
  canEdit,
  onClose,
  onSaved,
  onDeleted,
}: {
  heist: HeistWithOfficers | null;
  officers: RosterMember[];
  canEdit: boolean;
  onClose: () => void;
  onSaved: (updated: HeistWithOfficers) => void;
  onDeleted: () => void;
}) {
  const { showToast } = useToast();
  const [editing, setEditing] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [form, setForm] = useState<HeistFormState>({ name: "", kind: "CONFRONTO_ARMADO", outcome: "VITORIA", date: "" });
  const [selectedOfficerIds, setSelectedOfficerIds] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [shownHeist, setShownHeist] = useState<HeistWithOfficers | null>(null);

  // Reset the view whenever a different (or freshly saved) heist is shown.
  if (heist !== shownHeist) {
    setShownHeist(heist);
    setEditing(false);
    setConfirmingDelete(false);
    if (heist) {
      setForm(formFromHeist(heist));
      setSelectedOfficerIds(heist.officers.map((o) => o.userId));
    }
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!heist) return;
    if (selectedOfficerIds.length === 0) {
      showToast("Selecione ao menos um oficial participante!", "error");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`/api/heists/${heist.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, userIds: selectedOfficerIds }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Falha ao atualizar ação.");
      }
      const updated = (await res.json()) as HeistWithOfficers;
      showToast("Ação atualizada!", "success");
      setEditing(false);
      onSaved(updated);
    } catch (err) {
      showToast(err instanceof Error ? err.message : "Erro ao atualizar.", "error");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!heist) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/heists/${heist.id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Falha ao excluir ação.");
      }
      showToast("Ação excluída.", "info");
      setConfirmingDelete(false);
      onDeleted();
    } catch (err) {
      showToast(err instanceof Error ? err.message : "Erro ao excluir.", "error");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Modal
      open={!!heist}
      onClose={onClose}
      title={confirmingDelete ? "Excluir ação" : heist?.name || "Ação"}
      titleColorClass={confirmingDelete ? "text-rose-400" : "text-rocam-yellow"}
    >
      {heist && confirmingDelete && (
        <div className="space-y-4 text-xs">
          <p className="text-slate-200">
            Tem certeza que deseja excluir a ação{" "}
            <span className="font-bold text-slate-100">{heist.name}</span> ({formatDateOnly(heist.date)})?
          </p>
          <p className="text-rocam-muted">Esta ação não pode ser desfeita.</p>
          <div className="flex gap-2">
            <button
              type="button"
              disabled={submitting}
              onClick={() => setConfirmingDelete(false)}
              className="flex-1 py-2.5 text-xs font-bold text-slate-200 border border-rocam-border rounded-lg hover:bg-rocam-hover cursor-pointer disabled:opacity-50"
            >
              Cancelar
            </button>
            <button
              type="button"
              disabled={submitting}
              onClick={handleDelete}
              className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-white bg-rose-600 hover:bg-rose-500 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Trash2 className="w-3.5 h-3.5" />
              {submitting ? "Excluindo..." : "Excluir"}
            </button>
          </div>
        </div>
      )}

      {heist && !editing && !confirmingDelete && (
        <div className="space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <span
              className={`px-2 py-0.5 rounded font-bold ${
                heist.outcome === "VITORIA"
                  ? "text-emerald-400 bg-emerald-500/10"
                  : "text-rose-400 bg-rose-500/10"
              }`}
            >
              {HEIST_OUTCOME_LABELS[heist.outcome]}
            </span>
            <span className="text-rocam-muted">{formatDateOnly(heist.date)}</span>
          </div>

          <div className="pt-2 border-t border-rocam-border">
            <p className="text-rocam-muted uppercase text-[10px] font-bold tracking-wider">Tipo</p>
            <p className="text-slate-200 font-semibold">{HEIST_KIND_LABELS[heist.kind]}</p>
          </div>

          <div className="pt-2 border-t border-rocam-border">
            <p className="text-rocam-muted uppercase text-[10px] font-bold tracking-wider mb-1">
              Oficiais Participantes
            </p>
            <ul className="space-y-1">
              {heist.officers.map((o) => (
                <li key={o.userId} className="text-slate-200">
                  {resolveDisplayName(o.user)}{" "}
                  <span className="text-rocam-muted">({o.user.passport ?? "—"})</span>
                </li>
              ))}
              {heist.officers.length === 0 && (
                <li className="text-rocam-muted italic">Nenhum oficial registrado.</li>
              )}
            </ul>
          </div>

          {canEdit && (
            <div className="flex gap-2 pt-1">
              <button
                type="button"
                onClick={() => setEditing(true)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-rocam-yellow border border-rocam-yellow/40 rounded-lg hover:bg-rocam-hover cursor-pointer"
              >
                <Pencil className="w-3.5 h-3.5" /> Editar
              </button>
              <button
                type="button"
                onClick={() => setConfirmingDelete(true)}
                className="flex-1 flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold text-rose-400 border border-rose-400/40 rounded-lg hover:bg-rose-500/10 cursor-pointer"
              >
                <Trash2 className="w-3.5 h-3.5" /> Excluir
              </button>
            </div>
          )}
        </div>
      )}

      {heist && editing && !confirmingDelete && (
        <form onSubmit={handleSave} className="space-y-3">
          <HeistFormFields
            form={form}
            setForm={setForm}
            officers={officers}
            selectedOfficerIds={selectedOfficerIds}
            setSelectedOfficerIds={setSelectedOfficerIds}
          />
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                setForm(formFromHeist(heist));
                setSelectedOfficerIds(heist.officers.map((o) => o.userId));
                setEditing(false);
              }}
              className="flex-1 py-2.5 text-xs font-bold text-slate-200 border border-rocam-border rounded-lg hover:bg-rocam-hover cursor-pointer"
            >
              Cancelar
            </button>
            <button type="submit" disabled={submitting} className={`${primaryButtonClass} flex-1`}>
              {submitting ? "Salvando..." : "Salvar alterações"}
            </button>
          </div>
        </form>
      )}
    </Modal>
  );
}
