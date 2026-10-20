import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireUser, withApiErrorHandling } from "@/lib/api-auth";
import { heistSchema } from "@/lib/schemas";
import { logActivity } from "@/lib/activity-log";
import { parseDateOnly } from "@/lib/date-only";
import { assertRosterUserIds, heistInclude } from "@/lib/heists";
import { HEIST_KIND_LABELS, HEIST_OUTCOME_LABELS } from "@/components/acoes/heist-types";

export const GET = withApiErrorHandling(async () => {
  await requireUser();
  const heists = await prisma.heist.findMany({
    orderBy: { date: "desc" },
    include: heistInclude,
  });
  return NextResponse.json(heists);
});

export const POST = withApiErrorHandling(async (req) => {
  const actor = await requireUser();
  const body = heistSchema.parse(await req.json());
  // The creator always counts as a participant, even if they forgot to tick
  // themselves — that's how they get credited in the SR% metric.
  const userIds = [...new Set([...body.userIds, actor.id])];
  await assertRosterUserIds(body.userIds);

  const heist = await prisma.heist.create({
    data: {
      name: body.name,
      kind: body.kind,
      outcome: body.outcome,
      date: parseDateOnly(body.date),
      createdById: actor.id,
      officers: { create: userIds.map((userId) => ({ userId })) },
    },
    include: heistInclude,
  });

  await logActivity({
    type: "ACAO",
    title: "Ação Registrada",
    detail: `"${heist.name}" — ${HEIST_KIND_LABELS[heist.kind]}, ${HEIST_OUTCOME_LABELS[heist.outcome]}.`,
    actor,
  });

  return NextResponse.json(heist, { status: 201 });
});
