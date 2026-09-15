-- AlterTable
ALTER TABLE "Arrest" ADD COLUMN     "createdById" TEXT;

-- CreateIndex
CREATE INDEX "Arrest_createdById_idx" ON "Arrest"("createdById");

-- AddForeignKey
ALTER TABLE "Arrest" ADD CONSTRAINT "Arrest_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
