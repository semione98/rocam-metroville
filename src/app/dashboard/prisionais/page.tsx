import { prisma } from "@/lib/db";
import { auth } from "@/auth";
import { rosterSelect, onboardedFilter } from "@/lib/roster";
import { PrisionaisClient } from "@/components/prisionais/prisionais-client";

export default async function PrisionaisPage() {
  const session = await auth();
  const [arrests, officers] = await Promise.all([
    prisma.arrest.findMany({
      orderBy: { date: "desc" },
      include: { officers: { include: { user: { select: rosterSelect } } } },
    }),
    prisma.user.findMany({ where: onboardedFilter, select: rosterSelect, orderBy: { characterName: "asc" } }),
  ]);

  return (
    <PrisionaisClient
      initialArrests={arrests}
      officers={officers}
      currentUserId={session?.user?.id ?? null}
    />
  );
}
