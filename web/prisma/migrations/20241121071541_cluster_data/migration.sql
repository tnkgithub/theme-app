-- AlterTable
ALTER TABLE "posters" ADD COLUMN     "cluster_id" INTEGER;

-- CreateTable
CREATE TABLE "clusters" (
    "id" SERIAL NOT NULL,
    "rep_word1" TEXT,
    "rep_word2" TEXT,
    "rep_word3" TEXT,
    "rep_word4" TEXT,
    "rep_word5" TEXT,

    CONSTRAINT "clusters_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "posters" ADD CONSTRAINT "posters_cluster_id_fkey" FOREIGN KEY ("cluster_id") REFERENCES "clusters"("id") ON DELETE SET NULL ON UPDATE CASCADE;
