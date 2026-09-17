"use client";

import { useEffect, useMemo, useState } from "react";
import { Pencil, Search, Trash2 } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { resolveDisplayName } from "@/lib/display-name";
import type { RosterMember } from "@/lib/roster";
import { useToast } from "@/components/ui/toast";
import { inputClass, labelClass, primaryButtonClass } from "@/lib/ui";
import type { ArrestWithOfficers } from "./arrest-types";

const EMPTY_FORM = {
  qru: "",
  passport: "",
  bo: "",
  unidade: "ROCAM - VTR / Moto",
  outcome: "SUCESSO" as "SUCESSO" | "SEM_SUCESSO",
  imageUrl: "",
};

function formFromArrest(arrest: ArrestWithOfficers) {
  return {
    qru: arrest.qru,
    passport: arrest.passport,
    bo: arrest.bo,
    unidade: arrest.unidade,
    outcome: arrest.outcome,
    imageUrl: arrest.imageUrl ?? "",
  };
}

export function ArrestDetailModal({
  arrest,
  officers,
  canEdit,
  onClose,
  onSaved,
  onDeleted,
}: {
  arrest: ArrestWithOfficers | null;
  officers: RosterMember[];
  canEdit: boolean;
  onClose: () => void;
  onSaved: (updated: ArrestWithOfficers) => void;
  onDeleted: () => void;
}) {
  const { showToast } = useToast();
  const [editing, setEditing] = useState(false);
  const [confirmingDelete, setConfirmingDelete] = useState(false);
  const [form, setForm] = useState(EMPTY_FORM);
  const [selectedOfficerIds, setSelectedOfficerIds] = useState<string[]>([]);
  const [officerFilter, setOfficerFilter] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    setEditing(false);
    setConfirmingDelete(false);
    setOfficerFilter("");
    if (arrest) {
      setForm(formFromArrest(arrest));
      setSelectedOfficerIds(arrest.officers.map((o) => o.userId));
    }
  }, [arrest]);

  const filteredOfficers = useMemo(() => {
    const q = officerFilter.toLowerCase();
    return officers.filter(
      (o) =>
        resolveDisplayName(o).toLowerCase().includes(q) ||
        (o.passport ?? "").toLowerCase().includes(q)
    );
  }, [officers, officerFilter]);

  function toggleOfficer(id: string) {
    setSelectedOfficerIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!arrest) return;
    if (selectedOfficerIds.length === 0) {
      showToast("Selecione ao menos um oficial participante!", "error");
      return;
    }
    setSubmitting(true);
    try {
      const res = await fetch(`/api/arrests/${arrest.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, userIds: selectedOfficerIds }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Falha ao atualizar registro prisional.");
      }
      const updated = (await res.json()) as ArrestWithOfficers;
      showToast("Registro prisional atualizado!", "success");
      setEditing(false);
      onSaved(updated);
    } catch (err) {
      showToast(err instanceof Error ? err.message : "Erro ao atualizar.", "error");
    } finally {
      setSubmitting(false);
    }
  }

  async function handleDelete() {
    if (!arrest) return;
    setSubmitting(true);
    try {
      const res = await fetch(`/api/arrests/${arrest.id}`, { method: "DELETE" });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Falha ao excluir registro prisional.");
      }
      showToast("Registro prisional excluído.", "info");
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
      open={!!arrest}
      onClose={onClose}
      title={confirmingDelete ? "Excluir registro" : arrest?.qru || "Ocorrência"}
      titleColorClass={confirmingDelete ? "text-rose-400" : "text-rocam-yellow"}
    >
      {arrest && confirmingDelete && (
        <div className="space-y-4 text-xs">
          <p className="text-slate-200">
            Tem certeza que deseja excluir o registro{" "}
            <span className="font-bold text-slate-100">{arrest.qru}</span> (BO {arrest.bo})?
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

      {arrest && !editing && !confirmingDelete && (
        <div className="space-y-3 text-xs">
          <div className="flex items-center justify-between">
            <span
              className={`px-2 py-0.5 rounded font-bold ${
                arrest.outcome === "SUCESSO"
                  ? "text-emerald-400 bg-emerald-500/10"
                  : "text-rose-400 bg-rose-500/10"
              }`}
            >
              {arrest.outcome === "SUCESSO" ? "Sucesso" : "Sem Sucesso"}
            </span>
            <span className="text-rocam-muted">
              {new Date(arrest.date).toLocaleDateString("pt-BR")}
            </span>
          </div>

          {arrest.imageUrl ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={arrest.imageUrl}
              alt={`Foto do veículo apreendido — ${arrest.qru}`}
              className="w-full max-h-64 object-cover rounded-lg border border-rocam-border"
            />
          ) : (
            <div className="w-full py-6 rounded-lg border border-dashed border-rocam-border text-center text-rocam-muted italic">
              Nenhuma imagem anexada.
            </div>
          )}

          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-rocam-border">
            <div>
              <p className="text-rocam-muted uppercase text-[10px] font-bold tracking-wider">Nº do B.O</p>
              <p className="text-slate-200 font-semibold">{arrest.bo}</p>
            </div>
            <div>
              <p className="text-rocam-muted uppercase text-[10px] font-bold tracking-wider">Passaporte Resp.</p>
              <p className="text-slate-200 font-semibold">{arrest.passport}</p>
            </div>
            <div className="col-span-2">
              <p className="text-rocam-muted uppercase text-[10px] font-bold tracking-wider">Unidade PMC</p>
              <p className="text-slate-200 font-semibold">{arrest.unidade}</p>
            </div>
          </div>

          <div className="pt-2 border-t border-rocam-border">
            <p className="text-rocam-muted uppercase text-[10px] font-bold tracking-wider mb-1">
              Oficiais Participantes
            </p>
            <ul className="space-y-1">
              {arrest.officers.map((o) => (
                <li key={o.userId} className="text-slate-200">
                  {resolveDisplayName(o.user)}{" "}
                  <span className="text-rocam-muted">({o.user.passport ?? "—"})</span>
                </li>
              ))}
              {arrest.officers.length === 0 && (
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

      {arrest && editing && !confirmingDelete && (
        <form onSubmit={handleSave} className="space-y-3">
          <div>
            <label className={labelClass}>Nome da QRU *</label>
            <input
              required
              value={form.qru}
              onChange={(e) => setForm((f) => ({ ...f, qru: e.target.value }))}
              className={inputClass}
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className={labelClass}>Passaporte ID Resp. *</label>
              <input
                required
                value={form.passport}
                onChange={(e) => setForm((f) => ({ ...f, passport: e.target.value }))}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Nº do B.O *</label>
              <input
                required
                value={form.bo}
                onChange={(e) => setForm((f) => ({ ...f, bo: e.target.value }))}
                className={inputClass}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className={labelClass}>Unidade PMC *</label>
              <input
                required
                value={form.unidade}
                onChange={(e) => setForm((f) => ({ ...f, unidade: e.target.value }))}
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Resultado *</label>
              <select
                value={form.outcome}
                onChange={(e) => setForm((f) => ({ ...f, outcome: e.target.value as typeof f.outcome }))}
                className={inputClass}
              >
                <option value="SUCESSO">✅ Sucesso (Preso)</option>
                <option value="SEM_SUCESSO">❌ Sem Sucesso (Fuga)</option>
              </select>
            </div>
          </div>

          <div>
            <label className={labelClass}>URL da Foto do Veículo Apreendido</label>
            <input
              type="url"
              value={form.imageUrl}
              onChange={(e) => setForm((f) => ({ ...f, imageUrl: e.target.value }))}
              placeholder="Ex: https://imgur.com/foto-veiculo.jpg"
              className={inputClass}
            />
          </div>

          <div>
            <label className={labelClass}>Oficiais Participantes *</label>
            <div className="relative mb-1.5">
              <Search className="w-3.5 h-3.5 text-rocam-muted absolute left-2.5 top-2.5" />
              <input
                value={officerFilter}
                onChange={(e) => setOfficerFilter(e.target.value)}
                placeholder="Filtrar oficiais..."
                className={`${inputClass} pl-8`}
              />
            </div>
            <div className="max-h-36 overflow-y-auto border border-rocam-border rounded-lg divide-y divide-rocam-border">
              {filteredOfficers.map((o) => (
                <label
                  key={o.id}
                  className="flex items-center gap-2 p-2 text-xs cursor-pointer hover:bg-rocam-hover"
                >
                  <input
                    type="checkbox"
                    checked={selectedOfficerIds.includes(o.id)}
                    onChange={() => toggleOfficer(o.id)}
                    className="accent-rocam-yellow"
                  />
                  <span className="text-slate-200">
                    {resolveDisplayName(o)} <span className="text-rocam-muted">({o.passport})</span>
                  </span>
                </label>
              ))}
              {filteredOfficers.length === 0 && (
                <p className="p-2 text-xs text-rocam-muted italic">Nenhum oficial encontrado.</p>
              )}
            </div>
          </div>

          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => {
                setForm(formFromArrest(arrest));
                setSelectedOfficerIds(arrest.officers.map((o) => o.userId));
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
