/*
  Warnings:

  - A unique constraint covering the columns `[contact]` on the table `institutions` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "institutions" ADD COLUMN     "contact" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "institutions_contact_key" ON "institutions"("contact");
