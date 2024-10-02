/*
  Warnings:

  - You are about to drop the column `explanation` on the `posters` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "posters" DROP COLUMN "explanation",
ADD COLUMN     "discription" TEXT;
