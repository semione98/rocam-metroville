import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { ApiError, requireUser, withApiErrorHandling } from "@/lib/api-auth";
import { heistSchema } from "@/lib/schemas";
import { logActivity } from "@/lib/activity-log";
import { canEditHeistRecord } from "@/lib/permissions";
import { parseDateOnly } from "@/lib/date-only";
import { assertRosterUserIds, heistInclude } from "@/lib/heists";
import { HEIST_KIND_LABELS, HEIST_OUTCOME_LABELS } from "@/components/acoes/heist-types";

export const PATCH = withApiErrorHandling(async (req) => {
  const actor = await requireUser();
  const id = new URL(req.url).pathname.split("/").pop()!;
  const body = heistSchema.parse(await req.json());

  const existing = await prisma.heist.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, "Ação não encontrada.");
  }
  if (!canEditHeistRecord(actor, existing.createdById)) {
    throw new ApiError(403, "Apenas quem registrou ou Supervisor (e acima) podem editar.");
  }
  // On edit the submitted list is authoritative (no creator auto-include),
  // but an ação still needs at least one participant.
  const userIds = [...new Set(body.userIds)];
  if (userIds.length === 0) {
    throw new ApiError(400, "Selecione ao menos um oficial.");
  }
  await assertRosterUserIds(userIds);

  const heist = await prisma.heist.update({
    where: { id },
    data: {
      name: body.name,
      kind: body.kind,
      outcome: body.outcome,
      date: parseDateOnly(body.date),
      officers: {
        deleteMany: {},
        create: userIds.map((userId) => ({ userId })),
      },
    },
    include: heistInclude,
  });

  await logActivity({
    type: "ACAO",
    title: "Ação Atualizada",
    detail: `"${heist.name}" — ${HEIST_KIND_LABELS[heist.kind]}, ${HEIST_OUTCOME_LABELS[heist.outcome]}.`,
    actor,
  });

  return NextResponse.json(heist);
});

export const DELETE = withApiErrorHandling(async (req) => {
  const actor = await requireUser();
  const id = new URL(req.url).pathname.split("/").pop()!;

  const existing = await prisma.heist.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, "Ação não encontrada.");
  }
  if (!canEditHeistRecord(actor, existing.createdById)) {
    throw new ApiError(403, "Apenas quem registrou ou Supervisor (e acima) podem excluir.");
  }

  await prisma.heist.delete({ where: { id } });

  await logActivity({
    type: "ACAO",
    title: "Ação Removida",
    detail: `"${existing.name}" foi excluída.`,
    actor,
  });

  return NextResponse.json({ ok: true });
});
