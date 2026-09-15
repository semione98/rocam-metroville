import { prisma } from "@/lib/db";
import { requirePageRank } from "@/lib/page-auth";
import { Rank } from "@/generated/prisma";
import { DetalhesAvaliacoesClient } from "@/components/detalhes-avaliacoes/detalhes-avaliacoes-client";

export default async function DetalhesAvaliacoesPage() {
  // Finished PTR reports are visible to Graduado and up ("UP"), not just
  // Supervisor+ — mirrors isGraduadosUp().
  await requirePageRank(Rank.GRADUADOS);

  const completedEvals = await prisma.completedEval.findMany({
    orderBy: { createdAt: "desc" },
    include: { answers: true },
  });

  return <DetalhesAvaliacoesClient completedEvals={completedEvals} />;
}
