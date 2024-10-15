/*
  Warnings:

  - The primary key for the `title_similarity_matrix` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `numberId` on the `title_similarity_matrix` table. All the data in the column will be lost.
  - The primary key for the `title_similarity_matrix_part1` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `title_similarity_matrix_part1` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `title_similarity_matrix_part2` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `title_similarity_matrix_part2` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `title_similarity_matrix_part3` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `title_similarity_matrix_part3` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropForeignKey
ALTER TABLE "title_similarity_matrix_part1" DROP CONSTRAINT "title_similarity_matrix_part1_similarity_matrix_id_fkey";

-- DropForeignKey
ALTER TABLE "title_similarity_matrix_part2" DROP CONSTRAINT "title_similarity_matrix_part2_similarity_matrix_id_fkey";

-- DropForeignKey
ALTER TABLE "title_similarity_matrix_part3" DROP CONSTRAINT "title_similarity_matrix_part3_similarity_matrix_id_fkey";

-- AlterTable
ALTER TABLE "title_similarity_matrix" DROP CONSTRAINT "title_similarity_matrix_pkey",
DROP COLUMN "numberId",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "title_similarity_matrix_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "title_similarity_matrix_part1" DROP CONSTRAINT "title_similarity_matrix_part1_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "title_similarity_matrix_part1_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "title_similarity_matrix_part2" DROP CONSTRAINT "title_similarity_matrix_part2_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "title_similarity_matrix_part2_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "title_similarity_matrix_part3" DROP CONSTRAINT "title_similarity_matrix_part3_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "title_similarity_matrix_part3_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "title_similarity_matrix_part1" ADD CONSTRAINT "title_similarity_matrix_part1_similarity_matrix_id_fkey" FOREIGN KEY ("similarity_matrix_id") REFERENCES "title_similarity_matrix"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "title_similarity_matrix_part2" ADD CONSTRAINT "title_similarity_matrix_part2_similarity_matrix_id_fkey" FOREIGN KEY ("similarity_matrix_id") REFERENCES "title_similarity_matrix"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "title_similarity_matrix_part3" ADD CONSTRAINT "title_similarity_matrix_part3_similarity_matrix_id_fkey" FOREIGN KEY ("similarity_matrix_id") REFERENCES "title_similarity_matrix"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
