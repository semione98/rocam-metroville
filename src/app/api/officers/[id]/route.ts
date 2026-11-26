import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { ApiError, requireRank, withApiErrorHandling } from "@/lib/api-auth";
import { officerUpdateSchema } from "@/lib/schemas";
import { rosterSelect, type RosterMember } from "@/lib/roster";
import { logActivity } from "@/lib/activity-log";
import { resolveDisplayName } from "@/lib/display-name";
import {
  DiscordMemberRemovalError,
  removeGuildMemberIfPresent,
} from "@/lib/discord";
import { Rank } from "@/generated/prisma";

export const PATCH = withApiErrorHandling(async (req) => {
  const actor = await requireRank(Rank.SUPERVISOR);
  const id = new URL(req.url).pathname.split("/").pop()!;
  const body = officerUpdateSchema.parse(await req.json());

  if (body.passport) {
    const existing = await prisma.user.findUnique({ where: { passport: body.passport } });
    if (existing && existing.id !== id) {
      return NextResponse.json(
        { error: "Já existe um oficial com este passaporte." },
        { status: 409 }
      );
    }
  }

  const officer = await prisma.user.update({ where: { id }, data: body, select: rosterSelect });

  await logActivity({
    type: "EFETIVO",
    title: "Oficial Atualizado",
    detail: `Dados de ${resolveDisplayName(officer)} (ID ${officer.passport}) foram atualizados.`,
    actor,
  });

  return NextResponse.json(officer);
});

export const DELETE = withApiErrorHandling(async (req) => {
  const actor = await requireRank(Rank.SUPERVISOR);
  const id = new URL(req.url).pathname.split("/").pop()!;

  const existing = await prisma.user.findUnique({
    where: { id },
    select: { ...rosterSelect, discordId: true },
  });
  if (!existing) {
    throw new ApiError(404, "Oficial não encontrado.");
  }

  let discordRemoval: "removed" | "absent";
  try {
    discordRemoval = await removeGuildMemberIfPresent(existing.discordId);
  } catch (err) {
    if (err instanceof DiscordMemberRemovalError) {
      throw new ApiError(502, err.message);
    }
    throw err;
  }

  let officer: RosterMember;
  try {
    officer = await prisma.user.delete({
      where: { id },
      select: rosterSelect,
    });
  } catch (err) {
    console.error("[officers] conta não excluída após checagem no Discord", err);
    if (discordRemoval === "removed") {
      throw new ApiError(
        500,
        "A pessoa foi removida do Discord, mas a conta no painel não pôde ser excluída. Tente novamente."
      );
    }
    throw err;
  }

  const name = resolveDisplayName(officer);
  const discordDetail =
    discordRemoval === "removed"
      ? "A conta foi excluída e a pessoa foi removida do Discord da unidade."
      : "A conta foi excluída. A pessoa já não estava no Discord da unidade.";

  await logActivity({
    type: "EFETIVO",
    title: "Oficial Removido",
    detail: `${name} (ID ${officer.passport}) foi removido do efetivo. ${discordDetail}`,
    actor,
  });

  return NextResponse.json({ ok: true, discordRemoval });
});
