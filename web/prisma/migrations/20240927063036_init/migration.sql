-- CreateTable
CREATE TABLE "Poster" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "somCoordinate" INTEGER NOT NULL,
    "representationsCoordinate" INTEGER,

    CONSTRAINT "Poster_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "objWord" (
    "word" TEXT NOT NULL,
    "posterId" TEXT NOT NULL,

    CONSTRAINT "objWord_pkey" PRIMARY KEY ("word","posterId")
);

-- AddForeignKey
ALTER TABLE "objWord" ADD CONSTRAINT "objWord_posterId_fkey" FOREIGN KEY ("posterId") REFERENCES "Poster"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
