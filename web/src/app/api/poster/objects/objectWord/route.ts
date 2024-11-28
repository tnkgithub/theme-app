import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const word = searchParams.get('word');

  if (!word) {
    return NextResponse.json(
      { error: 'Invalid query parameter' },
      { status: 400 }
    );
  }

  try {
    const objectData = await prisma.objectWord.findFirst({
      where: {
        word: word,
      },
      include: {
        posters: {
          select: {
            posterId: true,
          },
        },
      },
    });

    if (!objectData) {
      return NextResponse.json(
        { error: 'No object words found' },
        { status: 404 }
      );
    }

    const posterIds = objectData.posters.map((poster) => poster.posterId);

    if (posterIds.length === 0) {
      return NextResponse.json(
        { error: 'No object words found' },
        { status: 404 }
      );
    }

    const responseData = {
      id: objectData.id,
      word: objectData.word,
      posters: [] as { posterId: string }[],
    };

    for (const posterId of posterIds) {
      const poster = await prisma.poster.findFirst({
        where: {
          id: posterId,
        },
        select: {
          posterId: true,
        },
      });

      if (poster) {
        responseData.posters.push({ posterId: poster.posterId });
      }
    }
    return NextResponse.json({ responseData }, { status: 200 });
  } catch (e) {
    return NextResponse.json(
      { error: 'No object words found' },
      { status: 404 }
    );
  }
}
