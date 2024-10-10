/*
  Warnings:

  - The primary key for the `title_similarity_matrix` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `title_similarity_matrix` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "title_similarity_matrix_part1" DROP CONSTRAINT "title_similarity_matrix_part1_similarity_matrix_id_fkey";

-- DropForeignKey
ALTER TABLE "title_similarity_matrix_part2" DROP CONSTRAINT "title_similarity_matrix_part2_similarity_matrix_id_fkey";

-- DropForeignKey
ALTER TABLE "title_similarity_matrix_part3" DROP CONSTRAINT "title_similarity_matrix_part3_similarity_matrix_id_fkey";

-- AlterTable
ALTER TABLE "title_similarity_matrix" DROP CONSTRAINT "title_similarity_matrix_pkey",
DROP COLUMN "id",
ADD COLUMN     "numberId" SERIAL NOT NULL,
ADD CONSTRAINT "title_similarity_matrix_pkey" PRIMARY KEY ("numberId");

-- AddForeignKey
ALTER TABLE "title_similarity_matrix_part1" ADD CONSTRAINT "title_similarity_matrix_part1_similarity_matrix_id_fkey" FOREIGN KEY ("similarity_matrix_id") REFERENCES "title_similarity_matrix"("numberId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "title_similarity_matrix_part2" ADD CONSTRAINT "title_similarity_matrix_part2_similarity_matrix_id_fkey" FOREIGN KEY ("similarity_matrix_id") REFERENCES "title_similarity_matrix"("numberId") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "title_similarity_matrix_part3" ADD CONSTRAINT "title_similarity_matrix_part3_similarity_matrix_id_fkey" FOREIGN KEY ("similarity_matrix_id") REFERENCES "title_similarity_matrix"("numberId") ON DELETE RESTRICT ON UPDATE CASCADE;
