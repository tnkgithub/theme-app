import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

// TitleSimilarityMatrixテーブルから指定されたカラムのデータを取得し、ソートして返す
export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const posterId = searchParams.get('posterId');
  const threshold = searchParams.get('threshold');

  if (!posterId || !threshold) {
    return NextResponse.json(
      { error: 'Invalid query parameter' },
      { status: 400 }
    );
  }

  //posterId
  const posterNumber = parseInt(posterId.split('o')[1]);
  const thresholdNumber = parseFloat(threshold);

  try {
    if (posterNumber < 1000) {
      const titleSimilarityMatrix =
        await prisma.titleSimilarityMatrixPart1.findMany({
          // posterIdが0.7以上のデータを取得
          select: {
            posterId: true,
            [posterId]: true,
          },
          orderBy: {
            [posterId]: 'desc',
          },
          where: {
            [posterId]: {
              gte: thresholdNumber,
            },
          },
        });
      return NextResponse.json({ titleSimilarityMatrix }, { status: 200 });
    } else if (posterNumber < 2000) {
      const titleSimilarityMatrix =
        await prisma.titleSimilarityMatrixPart2.findMany({
          select: {
            posterId: true,
            [posterId]: true,
          },
          orderBy: {
            [posterId]: 'desc',
          },
          where: {
            [posterId]: {
              gte: thresholdNumber,
            },
          },
        });
      return NextResponse.json({ titleSimilarityMatrix }, { status: 200 });
    } else {
      const titleSimilarityMatrix =
        await prisma.titleSimilarityMatrixPart3.findMany({
          select: {
            posterId: true,
            [posterId]: true,
          },
          orderBy: {
            [posterId]: 'desc',
          },
          where: {
            [posterId]: {
              gte: thresholdNumber,
            },
          },
        });
      return NextResponse.json({ titleSimilarityMatrix }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const body = await request.json();
  const titleSimData = body.titleSimilarityMatrix;

  if (!titleSimData) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }

  const titleIds = titleSimData.map(
    (item: { posterId: string }) => item.posterId
  );
  try {
    // データベースからidに一致するタイトルを取得
    const titleData = await prisma.poster.findMany({
      where: {
        posterId: {
          in: titleIds,
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
