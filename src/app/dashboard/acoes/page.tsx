import { prisma } from "@/lib/db";
import { auth } from "@/auth";
import { rosterSelect, onboardedFilter } from "@/lib/roster";
import { heistInclude } from "@/lib/heists";
import { AcoesClient } from "@/components/acoes/acoes-client";

export default async function AcoesPage() {
  const session = await auth();
  const [heists, officers] = await Promise.all([
    prisma.heist.findMany({ orderBy: { date: "desc" }, include: heistInclude }),
    prisma.user.findMany({ where: onboardedFilter, select: rosterSelect, orderBy: { characterName: "asc" } }),
  ]);

  return (
    <AcoesClient
      initialHeists={heists}
      officers={officers}
      currentUserId={session?.user?.id ?? null}
    />
  );
}
