"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { ClipboardCheck, Send } from "lucide-react";
import type { EvalRequest, Question } from "@/generated/prisma";
import type { RosterMember } from "@/lib/roster";
import { resolveDisplayName } from "@/lib/display-name";
import { useToast } from "@/components/ui/toast";
import { Modal } from "@/components/ui/modal";
import { inputClass, labelClass, primaryButtonClass } from "@/lib/ui";

const GRADE_OPTIONS = Array.from({ length: 11 }, (_, i) => i); // 0..10

const EMPTY_FORM = {
  studentName: "",
  studentPassport: "",
  startTime: "",
  endTime: "",
  date: "",
  dept: "ROCAM",
  evaluatorTargetId: "",
};

export function AvaliacoesClient({
  pendingRequests,
  questions,
  instructors,
  students,
  currentUserId,
}: {
  pendingRequests: EvalRequest[];
  questions: Question[];
  instructors: RosterMember[];
  students: RosterMember[];
  currentUserId: string | null;
}) {
  const router = useRouter();
  const { showToast } = useToast();

  const [form, setForm] = useState(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);

  const [activeRequest, setActiveRequest] = useState<EvalRequest | null>(null);
  const [answers, setAnswers] = useState<{ score: number; comment: string }[]>([]);
  const [finalizing, setFinalizing] = useState(false);

  async function handleSubmitRequest(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch("/api/eval-requests", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Falha ao enviar solicitação.");
      }
      showToast("Solicitação de PTR enviada para a fila!", "success");
      setForm(EMPTY_FORM);
      router.refresh();
    } catch (err) {
      showToast(err instanceof Error ? err.message : "Erro ao enviar.", "error");
    } finally {
      setSubmitting(false);
    }
  }

  function handleStudentSelect(id: string) {
    const student = students.find((s) => s.id === id);
    setForm((f) => ({
      ...f,
      studentName: student ? resolveDisplayName(student) : "",
      studentPassport: student?.passport ?? "",
    }));
  }

  function openEval(request: EvalRequest) {
    setActiveRequest(request);
    setAnswers(questions.map(() => ({ score: 10, comment: "" })));
  }

  async function handleFinalize(e: React.FormEvent) {
    e.preventDefault();
    if (!activeRequest) return;
    setFinalizing(true);
    try {
      const res = await fetch(`/api/eval-requests/${activeRequest.id}/finalize`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answers: questions.map((q, idx) => ({
            questionText: q.text,
            score: answers[idx]?.score ?? 10,
            comment: answers[idx]?.comment ?? "",
          })),
        }),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Falha ao concluir avaliação.");
      }
      showToast("Avaliação concluída e salva!", "success");
      setActiveRequest(null);
      router.refresh();
    } catch (err) {
      showToast(err instanceof Error ? err.message : "Erro ao concluir.", "error");
    } finally {
      setFinalizing(false);
    }
  }

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-rocam-card p-5 rounded-xl border border-rocam-border space-y-4">
        <h3 className="font-oswald text-base font-bold text-rocam-yellow flex items-center gap-2 border-b border-rocam-border pb-3">
          <Send className="w-5 h-5" /> Solicitar PTR
        </h3>
        <form onSubmit={handleSubmitRequest} className="space-y-3">
          <div>
            <label className={labelClass}>Nome do Aluno *</label>
            <select
              required
              value={students.find((s) => resolveDisplayName(s) === form.studentName)?.id ?? ""}
              onChange={(e) => handleStudentSelect(e.target.value)}
              className={inputClass}
            >
              <option value="" disabled>
                Selecione um piloto probatório...
              </option>
              {students.map((s) => (
                <option key={s.id} value={s.id}>
                  {resolveDisplayName(s)} {s.passport ? `(${s.passport})` : ""}
                </option>
              ))}
            </select>
            {students.length === 0 && (
              <p className="text-[11px] text-rocam-muted mt-1">Nenhum piloto probatório cadastrado.</p>
            )}
          </div>
          <div>
            <label className={labelClass}>Passaporte do Aluno *</label>
            <input
              required
              readOnly
              value={form.studentPassport}
              placeholder="Selecione o aluno acima"
              className={`${inputClass} opacity-80 cursor-not-allowed`}
            />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className={labelClass}>Data *</label>
              <input required type="date" value={form.date} onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Departamento *</label>
              <input required value={form.dept} onChange={(e) => setForm((f) => ({ ...f, dept: e.target.value }))} className={inputClass} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className={labelClass}>Início *</label>
              <input required type="time" value={form.startTime} onChange={(e) => setForm((f) => ({ ...f, startTime: e.target.value }))} className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>Fim *</label>
              <input required type="time" value={form.endTime} onChange={(e) => setForm((f) => ({ ...f, endTime: e.target.value }))} className={inputClass} />
            </div>
          </div>
          <div>
            <label className={labelClass}>Instrutor Alvo *</label>
            <select
              required
              value={form.evaluatorTargetId}
              onChange={(e) => setForm((f) => ({ ...f, evaluatorTargetId: e.target.value }))}
              className={inputClass}
            >
              <option value="" disabled>
                Selecione o instrutor...
              </option>
              {instructors.map((i) => (
                <option key={i.id} value={i.id}>
                  {resolveDisplayName(i)}
                </option>
              ))}
            </select>
            {instructors.length === 0 && (
              <p className="text-[11px] text-rocam-muted mt-1">Nenhum Graduado ou superior cadastrado.</p>
            )}
          </div>
          <button type="submit" disabled={submitting} className={primaryButtonClass}>
            {submitting ? "Enviando..." : "Enviar Solicitação"}
          </button>
        </form>
      </div>

      <div className="bg-rocam-card p-5 rounded-xl border border-rocam-border space-y-4 lg:col-span-2">
        <h3 className="font-oswald text-base font-bold text-slate-200 flex items-center gap-2 border-b border-rocam-border pb-3">
          <ClipboardCheck className="w-4 h-4 text-rocam-yellow" /> FILA DE PROBATÓRIOS PENDENTES
        </h3>
        <div className="space-y-3">
          {pendingRequests.length === 0 && (
            <p className="text-xs text-rocam-muted italic py-8 text-center">Nenhuma solicitação pendente.</p>
          )}
          {pendingRequests.map((r) => {
            // Only the exact target instructor may evaluate this PTR — no
            // Graduado+/Staff override (mirrors the server-side check in
            // the finalize route).
            const canReviewThis = !!currentUserId && r.evaluatorTargetId === currentUserId;
            return (
              <div key={r.id} className="p-3 bg-rocam-dark/80 rounded-xl border border-rocam-border text-xs space-y-2">
                <div className="flex justify-between items-start gap-3">
                  <div>
                    <h4 className="font-bold text-slate-100">
                      {r.studentName} (ID: {r.studentPassport})
                    </h4>
                    <p className="text-rocam-muted">Instrutor: {r.evaluatorTarget}</p>
                    <p className="text-rocam-muted">
                      {r.date} • {r.startTime} – {r.endTime}
                    </p>
                  </div>
                  {canReviewThis && (
                    <button
                      onClick={() => openEval(r)}
                      className="px-3 py-1.5 bg-emerald-500/20 text-emerald-400 font-bold rounded shrink-0 cursor-pointer"
                    >
                      Avaliar PTR
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Modal
        open={!!activeRequest}
        onClose={() => setActiveRequest(null)}
        title="Avaliação de PTR"
        titleColorClass="text-emerald-400"
      >
        {activeRequest && (
          <form onSubmit={handleFinalize} className="space-y-3">
            <p className="text-xs text-slate-200 font-bold">
              {activeRequest.studentName} (ID: {activeRequest.studentPassport})
            </p>
            <div className="space-y-2 max-h-[50vh] overflow-y-auto">
              {questions.map((q, idx) => (
                <div key={q.id} className="p-2.5 bg-rocam-dark rounded-xl border border-rocam-border space-y-2">
                  <span className="text-xs font-semibold text-slate-100">
                    {idx + 1}. {q.text}
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {GRADE_OPTIONS.map((grade) => {
                      const selected = (answers[idx]?.score ?? 10) === grade;
                      return (
                        <label
                          key={grade}
                          className={`flex items-center justify-center w-7 h-7 rounded-lg border text-[11px] font-bold cursor-pointer transition-colors ${
                            selected
                              ? "bg-rocam-yellow text-rocam-dark border-rocam-yellow"
                              : "bg-rocam-hover text-slate-300 border-rocam-border hover:border-rocam-yellow/50"
                          }`}
                        >
                          <input
                            type="radio"
                            name={`score-${q.id}`}
                            value={grade}
                            checked={selected}
                            onChange={() =>
                              setAnswers((prev) => {
                                const next = [...prev];
                                next[idx] = { ...next[idx], score: grade };
                                return next;
                              })
                            }
                            className="sr-only"
                          />
                          {grade}
                        </label>
                      );
                    })}
                  </div>
                  <input
                    type="text"
                    value={answers[idx]?.comment ?? ""}
                    onChange={(e) =>
                      setAnswers((prev) => {
                        const next = [...prev];
                        next[idx] = { ...next[idx], comment: e.target.value };
                        return next;
                      })
                    }
                    placeholder="Observação..."
                    className="w-full bg-rocam-hover border border-rocam-border rounded p-1.5 text-[11px] text-slate-200 outline-none"
                  />
                </div>
              ))}
            </div>
            <button type="submit" disabled={finalizing} className={primaryButtonClass.replace("bg-rocam-yellow text-rocam-dark hover:bg-yellow-400", "bg-emerald-500 text-slate-950 hover:bg-emerald-400")}>
              {finalizing ? "Salvando..." : "Concluir Avaliação"}
            </button>
          </form>
        )}
      </Modal>
    </section>
  );
}
