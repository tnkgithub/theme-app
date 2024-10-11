/*
  Warnings:

  - You are about to drop the column `discription` on the `posters` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "posters" DROP COLUMN "discription",
ADD COLUMN     "description" TEXT;
