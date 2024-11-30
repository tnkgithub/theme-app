import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

type objectDataProps = {
  word: string;
  posters: { posterId: string }[];
};

//
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const queryPosterId = searchParams.get('posterId');

  if (!queryPosterId) {
    return NextResponse.json(
      { error: 'Invalid query parameter' },
      { status: 400 }
    );
  }

  try {
    const poster = await prisma.poster.findFirst({
      where: {
        posterId: queryPosterId,
      },
      select: {
        objectWords: {
          select: {
            word: true,
          },
        },
      },
    });

    if (!poster) {
      return NextResponse.json({ error: 'No poster found' }, { status: 404 });
    }

    const words = poster.objectWords.map((objectWord) => objectWord.word);

    if (words.length === 0) {
      return NextResponse.json(
        { error: 'No object words found' },
        { status: 404 }
      );
    }

    const objectData: objectDataProps[] = [];

    for (const word of words) {
      const objectWord = await prisma.objectWord.findFirst({
        where: {
          id: word.id,
        },
        include: {
          posters: {
            select: {
              posterId: true,
            },
          },
        },
      });

      if (objectWord) {
        // posterIdと同じidを持つポスターをposterテーブルから取得
        const posters = await prisma.poster.findMany({
          where: {
            id: {
              in: objectWord.posters.map((poster) => poster.posterId),
            },
            posterId: {
              // posterIdと同じidを持つポスターを除外
              not: queryPosterId,
            },
          },
          select: {
            posterId: true,
          },
        });
        objectData.push({
          word: objectWord.word,
          posters,
        });
      }
    }

    return NextResponse.json({ objectData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
