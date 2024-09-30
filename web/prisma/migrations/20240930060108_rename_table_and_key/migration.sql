/*
  Warnings:

  - You are about to drop the `obj_word` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `poster` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "obj_word" DROP CONSTRAINT "obj_word_posterId_fkey";

-- DropTable
DROP TABLE "obj_word";

-- DropTable
DROP TABLE "poster";

-- CreateTable
CREATE TABLE "posters" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "explanation" TEXT,
    "som_coordinate" INTEGER NOT NULL,
    "representations_coordinate" INTEGER,

    CONSTRAINT "posters_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "object_words" (
    "word" TEXT NOT NULL,
    "poster_id" TEXT NOT NULL,

    CONSTRAINT "object_words_pkey" PRIMARY KEY ("word","poster_id")
);

-- AddForeignKey
ALTER TABLE "object_words" ADD CONSTRAINT "object_words_poster_id_fkey" FOREIGN KEY ("poster_id") REFERENCES "posters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
