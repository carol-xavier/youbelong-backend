/*
  Warnings:

  - Added the required column `mission` to the `institutions` table without a default value. This is not possible if the table is not empty.
  - Added the required column `values` to the `institutions` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "institutions" ADD COLUMN     "mission" TEXT NOT NULL,
ADD COLUMN     "values" TEXT NOT NULL;
