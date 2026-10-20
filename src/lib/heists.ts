import "server-only";
import { prisma } from "@/lib/db";
import { ApiError } from "@/lib/api-auth";
import { rosterSelect, onboardedFilter } from "@/lib/roster";

export const heistInclude = {
  officers: { include: { user: { select: rosterSelect } } },
} as const;

/** Rejects participant ids that aren't onboarded roster members, so a bad
 * id becomes a 400 instead of a foreign-key 500. */
export async function assertRosterUserIds(userIds: string[]): Promise<void> {
  if (userIds.length === 0) return;
  const found = await prisma.user.count({ where: { ...onboardedFilter, id: { in: userIds } } });
  if (found !== userIds.length) {
    throw new ApiError(400, "Oficial participante inválido.");
  }
}
