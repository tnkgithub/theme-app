import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

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
    const posterData = await prisma.poster.findFirst({
      where: {
        posterId: posterId,
      },
      include: {
        titleSimilarity: {
          select: Object.fromEntries(
            Array.from({ length: 132 }, (_, i) => [`id${i + 1}`, true])
          ),
        },
      },
    });

    if (!posterData) {
      return NextResponse.json({ error: 'No poster found' }, { status: 404 });
    }

    // titleSimilarity.id1 から id132 までのデータを取得
    const titleIdList = Object.values(posterData.titleSimilarity)
      .flatMap((similarity) =>
        Array.from({ length: 132 }, (_, i) => similarity[`id${i + 1}`])
      )
      .filter((id) => id !== null);

    // idに一致するタイトルを取得
    const titleData = await prisma.poster.findMany({
      where: {
        id: {
          in: titleIdList,
        },
      },
      select: {
        posterId: true,
        title: true,
      },
    });

    return NextResponse.json({ titleData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
