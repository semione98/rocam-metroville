import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireUser, ApiError, withApiErrorHandling } from "@/lib/api-auth";
import { evalRequestSchema } from "@/lib/schemas";
import { logActivity } from "@/lib/activity-log";
import { isGraduadosUp } from "@/lib/permissions";
import { resolveDisplayName } from "@/lib/display-name";

export const GET = withApiErrorHandling(async () => {
  await requireUser();
  const requests = await prisma.evalRequest.findMany({ orderBy: { createdAt: "desc" } });
  return NextResponse.json(requests);
});

export const POST = withApiErrorHandling(async (req) => {
  const actor = await requireUser();
  const { evaluatorTargetId, ...rest } = evalRequestSchema.parse(await req.json());

  // Never trust a client-supplied instructor name — look the user up and
  // derive the display name server-side, and confirm they're actually
  // eligible (Graduado or above) to be picked as "Instrutor Alvo".
  const targetUser = await prisma.user.findUnique({ where: { id: evaluatorTargetId } });
  if (!targetUser || !isGraduadosUp(targetUser.rank)) {
    throw new ApiError(400, "Instrutor alvo inválido. Selecione um Graduado ou superior.");
  }

  const request = await prisma.evalRequest.create({
    data: {
      ...rest,
      evaluatorTargetId: targetUser.id,
      evaluatorTarget: resolveDisplayName(targetUser),
    },
  });

  await logActivity({
    type: "AVALIACAO",
    title: "Solicitação de PTR Enviada",
    detail: `${request.studentName} (ID ${request.studentPassport}) entrou na fila de avaliação com ${request.evaluatorTarget}.`,
    actor,
  });

  return NextResponse.json(request, { status: 201 });
});
