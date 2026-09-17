"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { resolveDisplayName } from "@/lib/display-name";
import { canEditPrisionalRecord } from "@/lib/permissions";
import type { RosterMember } from "@/lib/roster";
import { useViewAs } from "@/components/view-as-context";
import { ArrestDetailModal } from "@/components/prisionais/arrest-detail-modal";
import type { ArrestWithOfficers } from "@/components/prisionais/arrest-types";

export function RecentArrests({
  arrests,
  officers,
  currentUserId,
}: {
  arrests: ArrestWithOfficers[];
  officers: RosterMember[];
  currentUserId: string | null;
}) {
  const router = useRouter();
  const { effectiveRank } = useViewAs();
  const [selectedArrest, setSelectedArrest] = useState<ArrestWithOfficers | null>(null);

  if (arrests.length === 0) {
    return (
      <p className="text-xs text-rocam-muted italic py-8 text-center">
        Nenhum registro prisional ainda.
      </p>
    );
  }

  return (
    <>
      <div className="space-y-3">
        {arrests.map((a) => (
          <button
            key={a.id}
            type="button"
            onClick={() => setSelectedArrest(a)}
            className="w-full text-left p-4 bg-rocam-dark/70 rounded-xl border border-rocam-border flex items-center justify-between text-xs gap-3 cursor-pointer hover:border-rocam-yellow/50 transition-colors"
          >
            <div className="min-w-0">
              <h4 className="font-bold text-slate-100 truncate">{a.qru || "Ocorrência"}</h4>
              <p className="text-rocam-muted truncate">
                BO: {a.bo} | Oficiais: {a.officers.map((o) => resolveDisplayName(o.user)).join(", ") || "—"}
              </p>
            </div>
            <span
              className={`px-2 py-0.5 rounded font-bold shrink-0 ${
                a.outcome === "SUCESSO" ? "text-emerald-400 bg-emerald-500/10" : "text-rose-400 bg-rose-500/10"
              }`}
            >
              {a.outcome === "SUCESSO" ? "Sucesso" : "Sem Sucesso"}
            </span>
          </button>
        ))}
      </div>

      <ArrestDetailModal
        arrest={selectedArrest}
        officers={officers}
        canEdit={
          !!selectedArrest &&
          !!currentUserId &&
          canEditPrisionalRecord({ id: currentUserId, rank: effectiveRank }, selectedArrest.createdById)
        }
        onClose={() => setSelectedArrest(null)}
        onSaved={(updated) => {
          setSelectedArrest(updated);
          router.refresh();
        }}
        onDeleted={() => {
          setSelectedArrest(null);
          router.refresh();
        }}
      />
    </>
  );
}
