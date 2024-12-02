import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

type ObjectDataProps = {
  word: string;
  posters: { posterId: string; title: string; description: string | null }[];
};

export async function GET() {
  try {
    const objects = await prisma.objectWord.findMany({
      select: {
        word: true,
        posters: {
          select: {
            posterId: true,
          },
        },
      },
    });

    if (!objects) {
      return NextResponse.json(
        { error: 'No object words found' },
        { status: 404 }
      );
    }

    // posterIdをposterテーブルから取得

    const objectData: ObjectDataProps[] = [];

    for (const object of objects) {
      const posters = await prisma.poster.findMany({
        where: {
          id: {
            in: object.posters.map((poster) => poster.posterId),
          },
        },
        select: {
          posterId: true,
          title: true,
          description: true,
        },
      });

      objectData.push({
        word: object.word,
        posters: posters,
      });
    }

    return NextResponse.json({ objectData }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'No object words found' },
      { status: 404 }
    );
  }
}
