"use client";

import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import type { HeistKind, HeistOutcome } from "@/generated/prisma";
import type { RosterMember } from "@/lib/roster";
import { resolveDisplayName } from "@/lib/display-name";
import { inputClass, labelClass } from "@/lib/ui";
import { HEIST_KIND_LABELS } from "./heist-types";

export type HeistFormState = {
  name: string;
  kind: HeistKind;
  outcome: HeistOutcome;
  date: string;
};

/** Fields shared by the "Registrar Ação" form and the edit modal. */
export function HeistFormFields({
  form,
  setForm,
  officers,
  selectedOfficerIds,
  setSelectedOfficerIds,
}: {
  form: HeistFormState;
  setForm: React.Dispatch<React.SetStateAction<HeistFormState>>;
  officers: RosterMember[];
  selectedOfficerIds: string[];
  setSelectedOfficerIds: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [officerFilter, setOfficerFilter] = useState("");

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

  return (
    <>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className={labelClass}>Data *</label>
          <input
            type="date"
            required
            value={form.date}
            onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
            className={inputClass}
          />
        </div>
        <div>
          <label className={labelClass}>Tipo *</label>
          <select
            value={form.kind}
            onChange={(e) => setForm((f) => ({ ...f, kind: e.target.value as HeistKind }))}
            className={inputClass}
          >
            {(Object.keys(HEIST_KIND_LABELS) as HeistKind[]).map((k) => (
              <option key={k} value={k}>
                {HEIST_KIND_LABELS[k]}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className={labelClass}>Nome da Ação *</label>
        <input
          required
          value={form.name}
          onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
          placeholder="Ex: Joalheria"
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
        {selectedOfficerIds.length > 0 && (
          <p className="text-[11px] text-rocam-muted mt-1">
            {selectedOfficerIds.length} oficial(is) selecionado(s).
          </p>
        )}
      </div>

      <div>
        <label className={labelClass}>Resultado *</label>
        <select
          value={form.outcome}
          onChange={(e) => setForm((f) => ({ ...f, outcome: e.target.value as HeistOutcome }))}
          className={inputClass}
        >
          <option value="VITORIA">✅ Vitória</option>
          <option value="DERROTA">❌ Derrota</option>
        </select>
      </div>
    </>
  );
}
