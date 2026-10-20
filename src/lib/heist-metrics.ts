import "server-only";
import { prisma } from "@/lib/db";
import { rosterSelect } from "@/lib/roster";
import { resolveDisplayName } from "@/lib/display-name";

export type HeistPerformanceRow = {
  userId: string;
  displayName: string;
  total: number;
  vitorias: number;
  derrotas: number;
  srPct: number;
};

/**
 * Per-officer ação performance from listed participants only.
 * The creator is forced onto that list at create time.
 */
export async function getHeistPerformance(): Promise<{
  rows: HeistPerformanceRow[];
  topSr: HeistPerformanceRow | null;
}> {
  const heists = await prisma.heist.findMany({
    select: {
      outcome: true,
      officers: { select: { userId: true } },
    },
  });

  const tally = new Map<string, { vitorias: number; derrotas: number }>();
  for (const heist of heists) {
    for (const officer of heist.officers) {
      const entry = tally.get(officer.userId) ?? { vitorias: 0, derrotas: 0 };
      if (heist.outcome === "VITORIA") entry.vitorias += 1;
      else entry.derrotas += 1;
      tally.set(officer.userId, entry);
    }
  }

  const userIds = Array.from(tally.keys());
  const users = await prisma.user.findMany({
    where: { id: { in: userIds } },
    select: rosterSelect,
  });
  const userById = new Map(users.map((u) => [u.id, u]));

  const rows: HeistPerformanceRow[] = userIds
    .map((userId) => {
      const { vitorias, derrotas } = tally.get(userId)!;
      const total = vitorias + derrotas;
      const user = userById.get(userId);
      return {
        userId,
        displayName: user ? resolveDisplayName(user) : "Desconhecido",
        total,
        vitorias,
        derrotas,
        srPct: total > 0 ? Math.round((vitorias / total) * 100) : 0,
      };
    })
    .filter((row) => row.total > 0)
    .sort((a, b) => b.srPct - a.srPct || b.vitorias - a.vitorias || b.total - a.total);

  return { rows, topSr: rows[0] ?? null };
}
