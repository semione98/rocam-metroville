import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { ApiError, requireUser, withApiErrorHandling } from "@/lib/api-auth";
import { arrestSchema } from "@/lib/schemas";
import { logActivity } from "@/lib/activity-log";
import { rosterSelect } from "@/lib/roster";
import { canEditPrisionalRecord } from "@/lib/permissions";

export const PATCH = withApiErrorHandling(async (req) => {
  const actor = await requireUser();
  const id = new URL(req.url).pathname.split("/").pop()!;
  const body = arrestSchema.parse(await req.json());

  const existing = await prisma.arrest.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, "Registro prisional não encontrado.");
  }
  if (!canEditPrisionalRecord(actor, existing.createdById)) {
    throw new ApiError(403, "Apenas quem registrou ou Supervisor (e acima) podem editar.");
  }

  const arrest = await prisma.arrest.update({
    where: { id },
    data: {
      qru: body.qru,
      passport: body.passport,
      bo: body.bo,
      unidade: body.unidade,
      outcome: body.outcome,
      imageUrl: body.imageUrl || null,
      officers: {
        deleteMany: {},
        create: body.userIds.map((userId) => ({ userId })),
      },
    },
    include: { officers: { include: { user: { select: rosterSelect } } } },
  });

  await logActivity({
    type: "PRISIONAL",
    title: "Registro Prisional Atualizado",
    detail: `QRU "${arrest.qru}" (BO ${arrest.bo}) — resultado: ${arrest.outcome === "SUCESSO" ? "Sucesso" : "Sem Sucesso"}.`,
    actor,
  });

  return NextResponse.json(arrest);
});

export const DELETE = withApiErrorHandling(async (req) => {
  const actor = await requireUser();
  const id = new URL(req.url).pathname.split("/").pop()!;

  const existing = await prisma.arrest.findUnique({ where: { id } });
  if (!existing) {
    throw new ApiError(404, "Registro prisional não encontrado.");
  }
  if (!canEditPrisionalRecord(actor, existing.createdById)) {
    throw new ApiError(403, "Apenas quem registrou ou Supervisor (e acima) podem excluir.");
  }

  await prisma.arrest.delete({ where: { id } });

  await logActivity({
    type: "PRISIONAL",
    title: "Registro Prisional Removido",
    detail: `QRU "${existing.qru}" (BO ${existing.bo}) foi excluído.`,
    actor,
  });

  return NextResponse.json({ ok: true });
});
