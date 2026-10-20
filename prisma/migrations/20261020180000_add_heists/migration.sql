-- CreateEnum
CREATE TYPE "HeistKind" AS ENUM ('CONFRONTO_ARMADO', 'PERSEGUICAO');

-- CreateEnum
CREATE TYPE "HeistOutcome" AS ENUM ('VITORIA', 'DERROTA');

-- AlterEnum
ALTER TYPE "ActivityLogType" ADD VALUE 'ACAO';

-- CreateTable
CREATE TABLE "Heist" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "kind" "HeistKind" NOT NULL,
    "outcome" "HeistOutcome" NOT NULL,
    "date" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdById" TEXT,

    CONSTRAINT "Heist_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "HeistOfficer" (
    "heistId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "HeistOfficer_pkey" PRIMARY KEY ("heistId","userId")
);

-- CreateIndex
CREATE INDEX "Heist_kind_idx" ON "Heist"("kind");

-- CreateIndex
CREATE INDEX "Heist_outcome_idx" ON "Heist"("outcome");

-- CreateIndex
CREATE INDEX "Heist_date_idx" ON "Heist"("date");

-- CreateIndex
CREATE INDEX "Heist_createdById_idx" ON "Heist"("createdById");

-- AddForeignKey
ALTER TABLE "Heist" ADD CONSTRAINT "Heist_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeistOfficer" ADD CONSTRAINT "HeistOfficer_heistId_fkey" FOREIGN KEY ("heistId") REFERENCES "Heist"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "HeistOfficer" ADD CONSTRAINT "HeistOfficer_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
