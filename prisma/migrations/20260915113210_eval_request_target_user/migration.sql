-- AlterTable
ALTER TABLE "EvalRequest" ADD COLUMN     "evaluatorTargetId" TEXT;

-- CreateIndex
CREATE INDEX "EvalRequest_evaluatorTargetId_idx" ON "EvalRequest"("evaluatorTargetId");

-- AddForeignKey
ALTER TABLE "EvalRequest" ADD CONSTRAINT "EvalRequest_evaluatorTargetId_fkey" FOREIGN KEY ("evaluatorTargetId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
