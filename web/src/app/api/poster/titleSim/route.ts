import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

// TitleSimilarityMatrixテーブルから指定されたカラムのデータを取得し、ソートして返す
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const posterId = searchParams.get('posterId');

  if (!posterId) {
    return NextResponse.json(
      { error: 'Invalid query parameter' },
      { status: 400 }
    );
  }

  //posterId
  const posterNumber = parseInt(posterId.split('o')[1]);

  try {
    if (posterNumber < 1000) {
      const titleSimilarityMatrix =
        await prisma.titleSimilarityMatrixPart1.findMany({
          // posterIdが0.7以上のデータを取得
          select: {
            id: true,
            [posterId]: true,
          },
          orderBy: {
            [posterId]: 'desc',
          },
          where: {
            [posterId]: {
              gte: 0.7,
            },
          },
        });
      return NextResponse.json({ titleSimilarityMatrix }, { status: 200 });
    } else if (posterNumber < 2000) {
      const titleSimilarityMatrix =
        await prisma.titleSimilarityMatrixPart2.findMany({
          select: {
            id: true,
            [posterId]: true,
          },
          orderBy: {
            [posterId]: 'desc',
          },
          where: {
            [posterId]: {
              gte: 0.7,
            },
          },
        });
      return NextResponse.json({ titleSimilarityMatrix }, { status: 200 });
    } else {
      const titleSimilarityMatrix =
        await prisma.titleSimilarityMatrixPart3.findMany({
          select: {
            id: true,
            [posterId]: true,
          },
          orderBy: {
            [posterId]: 'desc',
          },
          where: {
            [posterId]: {
              gte: 0.7,
            },
          },
        });
      return NextResponse.json({ titleSimilarityMatrix }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
