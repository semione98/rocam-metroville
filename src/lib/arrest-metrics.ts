import "server-only";
import { prisma } from "@/lib/db";
import { rosterSelect } from "@/lib/roster";
import { resolveDisplayName } from "@/lib/display-name";

export type ArrestPerformanceRow = {
  userId: string;
  displayName: string;
  passport: string | null;
  badge: string | null;
  sucesso: number;
  falha: number;
  total: number;
  sucessoPct: number;
  falhaPct: number;
};

/**
 * Per-officer prisional performance, crediting an arrest to a user if they
 * created it or are a listed "Oficial Participante" — counted once per
 * arrest even if both apply.
 */
export async function getArrestPerformance(): Promise<{
  rows: ArrestPerformanceRow[];
  topSucesso: ArrestPerformanceRow | null;
}> {
  const arrests = await prisma.arrest.findMany({
    select: {
      outcome: true,
      createdById: true,
      officers: { select: { userId: true } },
    },
  });

  const tally = new Map<string, { sucesso: number; falha: number }>();
  for (const arrest of arrests) {
    const userIds = new Set<string>();
    if (arrest.createdById) userIds.add(arrest.createdById);
    for (const officer of arrest.officers) userIds.add(officer.userId);

    for (const userId of userIds) {
      const entry = tally.get(userId) ?? { sucesso: 0, falha: 0 };
      if (arrest.outcome === "SUCESSO") entry.sucesso += 1;
      else entry.falha += 1;
      tally.set(userId, entry);
    }
  }

  const userIds = Array.from(tally.keys());
  const users = await prisma.user.findMany({
    where: { id: { in: userIds } },
    select: rosterSelect,
  });
  const userById = new Map(users.map((u) => [u.id, u]));

  const rows: ArrestPerformanceRow[] = userIds
    .map((userId) => {
      const { sucesso, falha } = tally.get(userId)!;
      const total = sucesso + falha;
      const user = userById.get(userId);
      return {
        userId,
        displayName: user ? resolveDisplayName(user) : "Desconhecido",
        passport: user?.passport ?? null,
        badge: user?.badge ?? null,
        sucesso,
        falha,
        total,
        sucessoPct: total > 0 ? Math.round((sucesso / total) * 100) : 0,
        falhaPct: total > 0 ? Math.round((falha / total) * 100) : 0,
      };
    })
    .filter((row) => row.total > 0)
    .sort((a, b) => b.sucesso - a.sucesso || b.total - a.total);

  return { rows, topSucesso: rows[0] ?? null };
}
