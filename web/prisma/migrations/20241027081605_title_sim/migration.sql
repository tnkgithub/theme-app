/*
  Warnings:

  - You are about to drop the `title_similarity_matrix` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `title_similarity_matrix_part1` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `title_similarity_matrix_part2` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `title_similarity_matrix_part3` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "title_similarity_matrix_part1" DROP CONSTRAINT "title_similarity_matrix_part1_similarity_matrix_id_fkey";

-- DropForeignKey
ALTER TABLE "title_similarity_matrix_part2" DROP CONSTRAINT "title_similarity_matrix_part2_similarity_matrix_id_fkey";

-- DropForeignKey
ALTER TABLE "title_similarity_matrix_part3" DROP CONSTRAINT "title_similarity_matrix_part3_similarity_matrix_id_fkey";

-- DropTable
DROP TABLE "title_similarity_matrix";

-- DropTable
DROP TABLE "title_similarity_matrix_part1";

-- DropTable
DROP TABLE "title_similarity_matrix_part2";

-- DropTable
DROP TABLE "title_similarity_matrix_part3";

-- CreateTable
CREATE TABLE "title_similarities" (
    "poster_id" INTEGER NOT NULL,
    "id1" INTEGER,
    "id2" INTEGER,
    "id3" INTEGER,
    "id4" INTEGER,
    "id5" INTEGER,
    "id6" INTEGER,
    "id7" INTEGER,
    "id8" INTEGER,
    "id9" INTEGER,
    "id10" INTEGER,
    "id11" INTEGER,
    "id12" INTEGER,
    "id13" INTEGER,
    "id14" INTEGER,
    "id15" INTEGER,
    "id16" INTEGER,
    "id17" INTEGER,
    "id18" INTEGER,
    "id19" INTEGER,
    "id20" INTEGER,
    "id21" INTEGER,
    "id22" INTEGER,
    "id23" INTEGER,
    "id24" INTEGER,
    "id25" INTEGER,
    "id26" INTEGER,
    "id27" INTEGER,
    "id28" INTEGER,
    "id29" INTEGER,
    "id30" INTEGER,
    "id31" INTEGER,
    "id32" INTEGER,
    "id33" INTEGER,
    "id34" INTEGER,
    "id35" INTEGER,
    "id36" INTEGER,
    "id37" INTEGER,
    "id38" INTEGER,
    "id39" INTEGER,
    "id40" INTEGER,
    "id41" INTEGER,
    "id42" INTEGER,
    "id43" INTEGER,
    "id44" INTEGER,
    "id45" INTEGER,
    "id46" INTEGER,
    "id47" INTEGER,
    "id48" INTEGER,
    "id49" INTEGER,
    "id50" INTEGER,
    "id51" INTEGER,
    "id52" INTEGER,
    "id53" INTEGER,
    "id54" INTEGER,
    "id55" INTEGER,
    "id56" INTEGER,
    "id57" INTEGER,
    "id58" INTEGER,
    "id59" INTEGER,
    "id60" INTEGER,
    "id61" INTEGER,
    "id62" INTEGER,
    "id63" INTEGER,
    "id64" INTEGER,
    "id65" INTEGER,
    "id66" INTEGER,
    "id67" INTEGER,
    "id68" INTEGER,
    "id69" INTEGER,
    "id70" INTEGER,
    "id71" INTEGER,
    "id72" INTEGER,
    "id73" INTEGER,
    "id74" INTEGER,
    "id75" INTEGER,
    "id76" INTEGER,
    "id77" INTEGER,
    "id78" INTEGER,
    "id79" INTEGER,
    "id80" INTEGER,
    "id81" INTEGER,
    "id82" INTEGER,
    "id83" INTEGER,
    "id84" INTEGER,
    "id85" INTEGER,
    "id86" INTEGER,
    "id87" INTEGER,
    "id88" INTEGER,
    "id89" INTEGER,
    "id90" INTEGER,
    "id91" INTEGER,
    "id92" INTEGER,
    "id93" INTEGER,
    "id94" INTEGER,
    "id95" INTEGER,
    "id96" INTEGER,
    "id97" INTEGER,
    "id98" INTEGER,
    "id99" INTEGER,
    "id100" INTEGER,
    "id101" INTEGER,
    "id102" INTEGER,
    "id103" INTEGER,
    "id104" INTEGER,
    "id105" INTEGER,
    "id106" INTEGER,
    "id107" INTEGER,
    "id108" INTEGER,
    "id109" INTEGER,
    "id110" INTEGER,
    "id111" INTEGER,
    "id112" INTEGER,
    "id113" INTEGER,
    "id114" INTEGER,
    "id115" INTEGER,
    "id116" INTEGER,
    "id117" INTEGER,
    "id118" INTEGER,
    "id119" INTEGER,
    "id120" INTEGER,
    "id121" INTEGER,
    "id122" INTEGER,
    "id123" INTEGER,
    "id124" INTEGER,
    "id125" INTEGER,
    "id126" INTEGER,
    "id127" INTEGER,
    "id128" INTEGER,
    "id129" INTEGER,
    "id130" INTEGER,
    "id131" INTEGER,
    "id132" INTEGER,

    CONSTRAINT "title_similarities_pkey" PRIMARY KEY ("poster_id")
);

-- AddForeignKey
ALTER TABLE "title_similarities" ADD CONSTRAINT "title_similarities_poster_id_fkey" FOREIGN KEY ("poster_id") REFERENCES "posters"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
