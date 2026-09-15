import { prisma } from "@/lib/db";
import { auth } from "@/auth";
import { Rank } from "@/generated/prisma";
import { rosterSelect } from "@/lib/roster";
import { AvaliacoesClient } from "@/components/avaliacoes/avaliacoes-client";

// Ranks eligible to be picked as "Instrutor Alvo" — Graduado and any rank
// above it ("Graduado ou UP"), mirroring the isGraduadosUp() hierarchy.
const INSTRUCTOR_RANKS: Rank[] = [
  Rank.GRADUADOS,
  Rank.ELITE,
  Rank.SUPERVISOR,
  Rank.SUBGESTOR,
  Rank.GESTOR,
  Rank.STAFF,
];

export default async function AvaliacoesPage() {
  const session = await auth();

  const [pendingRequests, questions, instructors, students] = await Promise.all([
    prisma.evalRequest.findMany({ where: { status: "PENDENTE" }, orderBy: { createdAt: "asc" } }),
    prisma.question.findMany({ orderBy: { order: "asc" } }),
    prisma.user.findMany({
      where: { rank: { in: INSTRUCTOR_RANKS } },
      select: rosterSelect,
      orderBy: { characterName: "asc" },
    }),
    prisma.user.findMany({
      where: { rank: Rank.PROBATORIOS },
      select: rosterSelect,
      orderBy: { characterName: "asc" },
    }),
  ]);

  return (
    <AvaliacoesClient
      pendingRequests={pendingRequests}
      questions={questions}
      instructors={instructors}
      students={students}
      currentUserId={session?.user?.id ?? null}
    />
  );
}
