/*
  Warnings:

  - You are about to drop the `Poster` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `objWord` table. If the table is not empty, all the data it contains will be lost.

*/

-- CreateTable
CREATE TABLE "poster" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "explanation" TEXT,
    "somCoordinate" INTEGER NOT NULL,
    "representationsCoordinate" INTEGER,

    CONSTRAINT "poster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "obj_word" (
    "word" TEXT NOT NULL,
    "posterId" TEXT NOT NULL,

    CONSTRAINT "obj_word_pkey" PRIMARY KEY ("word","posterId")
);

-- AddForeignKey
ALTER TABLE "obj_word" ADD CONSTRAINT "obj_word_posterId_fkey" FOREIGN KEY ("posterId") REFERENCES "poster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
