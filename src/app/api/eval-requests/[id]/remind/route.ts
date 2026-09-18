import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireUser, ApiError, withApiErrorHandling } from "@/lib/api-auth";
import { logActivity } from "@/lib/activity-log";
import { sendChannelMessage } from "@/lib/discord";

// Posts a reminder to the configured Discord channel nudging the "Instrutor
// Alvo" to fill in a still-pending PTR report. Any authenticated user may
// trigger this — it's a courtesy ping, not a privileged action.
export const POST = withApiErrorHandling(async (req) => {
  const actor = await requireUser();
  const id = new URL(req.url).pathname.split("/").at(-2)!;

  const evalRequest = await prisma.evalRequest.findUnique({
    where: { id },
    include: { evaluatorTargetUser: true },
  });
  if (!evalRequest) throw new ApiError(404, "Solicitação de PTR não encontrada.");
  if (evalRequest.status === "CONCLUIDO") {
    throw new ApiError(409, "Esta avaliação já foi concluída.");
  }

  const channelId = process.env.DISCORD_PTR_REMINDER_CHANNEL_ID;
  if (!channelId) {
    throw new ApiError(500, "Canal de lembrete não configurado.");
  }

  // Prefer a real ping when the target's Discord account is known; fall back
  // to the denormalized display name (as plain "@name" text, not a ping) for
  // legacy rows that predate `evaluatorTargetId`.
  const instructorMention = evalRequest.evaluatorTargetUser
    ? `<@${evalRequest.evaluatorTargetUser.discordId}>`
    : `@${evalRequest.evaluatorTarget}`;

  const content = `Olá ${instructorMention} Este é um lembrete de que você precisa preencher o relatório do @${evalRequest.studentName}`;

  const sent = await sendChannelMessage(channelId, content);
  if (!sent) {
    throw new ApiError(502, "Falha ao enviar lembrete no Discord.");
  }

  await logActivity({
    type: "AVALIACAO",
    title: "Lembrete de PTR Enviado",
    detail: `${actor.name} enviou um lembrete a ${evalRequest.evaluatorTarget} para preencher o relatório de ${evalRequest.studentName}.`,
    actor,
  });

  return NextResponse.json({ ok: true });
});
