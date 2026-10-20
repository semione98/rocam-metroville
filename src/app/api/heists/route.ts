import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireUser, withApiErrorHandling } from "@/lib/api-auth";
import { heistSchema } from "@/lib/schemas";
import { logActivity } from "@/lib/activity-log";
import { rosterSelect } from "@/lib/roster";
import { parseDateOnly } from "@/lib/date-only";
import { HEIST_KIND_LABELS, HEIST_OUTCOME_LABELS } from "@/components/acoes/heist-types";

const heistInclude = {
  officers: { include: { user: { select: rosterSelect } } },
} as const;

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
  const userIds = [...new Set([...body.userIds, actor.id])];

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
