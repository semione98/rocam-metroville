import type { Prisma } from "@/generated/prisma";
import type { HeistKind, HeistOutcome } from "@/generated/prisma";

export const HEIST_KIND_LABELS: Record<HeistKind, string> = {
  CONFRONTO_ARMADO: "Confronto armado",
  PERSEGUICAO: "Perseguição",
};

export const HEIST_OUTCOME_LABELS: Record<HeistOutcome, string> = {
  VITORIA: "Vitória",
  DERROTA: "Derrota",
};

export type HeistWithOfficers = Prisma.HeistGetPayload<{
  include: {
    officers: {
      include: {
        user: {
          select: {
            id: true;
            characterName: true;
            discordNick: true;
            username: true;
            passport: true;
            badge: true;
            rank: true;
            status: true;
            arrestsCount: true;
            warningsCount: true;
          };
        };
      };
    };
  };
}>;
