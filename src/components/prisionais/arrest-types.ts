import type { Prisma } from "@/generated/prisma";

export type ArrestWithOfficers = Prisma.ArrestGetPayload<{
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
