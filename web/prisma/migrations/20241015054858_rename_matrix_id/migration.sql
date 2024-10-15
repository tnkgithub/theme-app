/*
  Warnings:

  - The primary key for the `title_similarity_matrix_part1` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `title_similarity_matrix_part1` table. All the data in the column will be lost.
  - The primary key for the `title_similarity_matrix_part2` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `title_similarity_matrix_part2` table. All the data in the column will be lost.
  - The primary key for the `title_similarity_matrix_part3` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `title_similarity_matrix_part3` table. All the data in the column will be lost.
  - Added the required column `poster_id` to the `title_similarity_matrix_part1` table without a default value. This is not possible if the table is not empty.
  - Added the required column `poster_id` to the `title_similarity_matrix_part2` table without a default value. This is not possible if the table is not empty.
  - Added the required column `poster_id` to the `title_similarity_matrix_part3` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "title_similarity_matrix_part1" DROP CONSTRAINT "title_similarity_matrix_part1_pkey",
DROP COLUMN "id",
ADD COLUMN     "poster_id" TEXT NOT NULL,
ADD CONSTRAINT "title_similarity_matrix_part1_pkey" PRIMARY KEY ("poster_id");

-- AlterTable
ALTER TABLE "title_similarity_matrix_part2" DROP CONSTRAINT "title_similarity_matrix_part2_pkey",
DROP COLUMN "id",
ADD COLUMN     "poster_id" TEXT NOT NULL,
ADD CONSTRAINT "title_similarity_matrix_part2_pkey" PRIMARY KEY ("poster_id");

-- AlterTable
ALTER TABLE "title_similarity_matrix_part3" DROP CONSTRAINT "title_similarity_matrix_part3_pkey",
DROP COLUMN "id",
ADD COLUMN     "poster_id" TEXT NOT NULL,
ADD CONSTRAINT "title_similarity_matrix_part3_pkey" PRIMARY KEY ("poster_id");
