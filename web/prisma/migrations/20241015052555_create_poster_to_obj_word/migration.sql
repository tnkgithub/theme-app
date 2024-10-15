/*
  Warnings:

  - The primary key for the `object_words` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `poster_id` on the `object_words` table. All the data in the column will be lost.
  - The primary key for the `posters` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `posters` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `posterId` to the `posters` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "object_words" DROP CONSTRAINT "object_words_poster_id_fkey";

-- AlterTable
ALTER TABLE "object_words" DROP CONSTRAINT "object_words_pkey",
DROP COLUMN "poster_id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "object_words_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "posters" DROP CONSTRAINT "posters_pkey",
ADD COLUMN     "posterId" TEXT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "posters_pkey" PRIMARY KEY ("id");

-- CreateTable
CREATE TABLE "posters_to_object_words" (
    "id" SERIAL NOT NULL,
    "poster_id" INTEGER NOT NULL,
    "word_id" INTEGER NOT NULL,

    CONSTRAINT "posters_to_object_words_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "posters_to_object_words" ADD CONSTRAINT "posters_to_object_words_poster_id_fkey" FOREIGN KEY ("poster_id") REFERENCES "posters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "posters_to_object_words" ADD CONSTRAINT "posters_to_object_words_word_id_fkey" FOREIGN KEY ("word_id") REFERENCES "object_words"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
