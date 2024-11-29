import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

//
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const posterId = searchParams.get('posterId');

  if (!posterId) {
    return NextResponse.json(
      { error: 'Invalid query parameter' },
      { status: 400 }
    );
  }

  try {
    const poster = await prisma.poster.findFirst({
      where: {
        posterId: posterId,
      },
      select: {
        posterId: true,
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

    const posterIdsIncludingWords = [];

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
          },
          select: {
            posterId: true,
          },
        });
        posterIdsIncludingWords.push({
          word: objectWord.word,
          posters,
        });
      }
    }

    return NextResponse.json({ posterIdsIncludingWords }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
