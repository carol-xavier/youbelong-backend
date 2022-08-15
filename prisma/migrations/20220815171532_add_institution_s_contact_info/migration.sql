/*
  Warnings:

  - Made the column `contact` on table `institutions` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "institutions" ALTER COLUMN "contact" SET NOT NULL;
