"use client";

import { useMemo, useState } from "react";
import { FileSearch, Filter } from "lucide-react";
import type { Prisma } from "@/generated/prisma";
import { inputClass, labelClass } from "@/lib/ui";

type CompletedEvalWithAnswers = Prisma.CompletedEvalGetPayload<{
  include: { answers: true };
}>;

const ALL_STUDENTS = "__all__";

export function DetalhesAvaliacoesClient({
  completedEvals,
}: {
  completedEvals: CompletedEvalWithAnswers[];
}) {
  const [studentFilter, setStudentFilter] = useState(ALL_STUDENTS);

  const studentOptions = useMemo(() => {
    const names = new Set(completedEvals.map((e) => e.studentName));
    return Array.from(names).sort((a, b) => a.localeCompare(b));
  }, [completedEvals]);

  const filteredEvals = useMemo(() => {
    if (studentFilter === ALL_STUDENTS) return completedEvals;
    return completedEvals.filter((e) => e.studentName === studentFilter);
  }, [completedEvals, studentFilter]);

  return (
    <section className="bg-rocam-card p-5 rounded-xl border border-rocam-border space-y-4">
      <h3 className="font-oswald text-base font-bold text-slate-200 flex items-center gap-2 border-b border-rocam-border pb-3">
        <FileSearch className="w-4 h-4 text-rocam-yellow" /> DOSSIÊ DE AVALIAÇÕES CONCLUÍDAS
      </h3>

      <div className="max-w-xs">
        <label className={labelClass}>
          <Filter className="w-3 h-3 inline mr-1" /> Filtrar por Piloto Probatório
        </label>
        <select
          value={studentFilter}
          onChange={(e) => setStudentFilter(e.target.value)}
          className={inputClass}
        >
          <option value={ALL_STUDENTS}>Todos os probatórios</option>
          {studentOptions.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-3">
        {filteredEvals.length === 0 && (
          <p className="text-xs text-rocam-muted italic py-8 text-center">
            {completedEvals.length === 0
              ? "Nenhuma avaliação concluída ainda."
              : "Nenhuma avaliação encontrada para este probatório."}
          </p>
        )}
        {filteredEvals.map((e) => (
          <div key={e.id} className="p-4 bg-rocam-dark rounded-xl border border-rocam-border text-xs space-y-2">
            <div className="flex items-center justify-between">
              <h4 className="font-bold text-slate-100">
                {e.studentName} (ID: {e.studentPassport})
              </h4>
              <span className="font-oswald text-rocam-yellow font-bold">Nota: {e.averageScore}</span>
            </div>
            <p className="text-rocam-muted">
              Avaliador: {e.evaluator} | Data: {e.date}
            </p>
            <div className="space-y-1 pt-2 border-t border-rocam-border">
              {e.answers.map((a) => (
                <div key={a.id} className="flex items-center justify-between gap-2">
                  <span className="text-slate-300 truncate">{a.questionText}</span>
                  <span className="text-rocam-yellow font-bold shrink-0">{a.score}/10</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
