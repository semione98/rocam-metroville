"use client";

import { Modal } from "@/components/ui/modal";
import { resolveDisplayName } from "@/lib/display-name";
import type { ArrestWithOfficers } from "./arrest-types";

export function ArrestDetailModal({
  arrest,
  onClose,
}: {
  arrest: ArrestWithOfficers | null;
  onClose: () => void;
}) {
  return (
    <Modal open={!!arrest} onClose={onClose} title={arrest?.qru || "Ocorrência"}>
      {arrest && (
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
        </div>
      )}
    </Modal>
  );
}
