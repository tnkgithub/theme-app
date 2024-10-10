import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

// TitleSimilarityMatrixテーブルから指定されたカラムのデータを取得し、ソートして返す
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const posterId = searchParams.get('posterId');

  if (!posterId) {
    return NextResponse.json(
      { error: 'posterId is required' },
      { status: 400 }
    );
  }

  try {
    const titleSim = await prisma.titleSimilarity.findMany({
      where: {
        id: posterId,
      },
    });
    return NextResponse.json({ titleSim }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
