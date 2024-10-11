import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

// TitleSimilarityMatrixテーブルから指定されたカラムのデータを取得し、ソートして返す
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const posterId = searchParams.get('posterId');

  // posterId='poOOOOOO' のような文字列を 'p', 'OOOOOO' に分割し、'OOOOOO' をnumber型に変換して、0として返す
  if (!posterId) {
    return NextResponse.json(
      { error: 'posterId is required' },
      { status: 400 }
    );
  }
  const posterIdNumber = posterId.split('o')[1];
  const posterNumber = Number(posterIdNumber);

  let tableNum: string = '';
  if (posterNumber < 1000) {
    tableNum = 'title_similarity_matrix_part1';
  } else if (posterNumber < 2000) {
    tableNum = 'title_similarity_matrix_part2';
  } else {
    tableNum = 'title_similarity_matrix_part3';
  }

  try {
    // q: 0.5以上の類似度のポスターを取得をしたい場合
    // a: SELECT id, ${posterId} FROM ${tableNum} WHERE ${posterId} >= 0.5 ORDER BY ${posterId} DESC
    const titleSimilarityMatrix = await prisma.$queryRawUnsafe(`
      SELECT id, ${posterId}
      FROM ${tableNum}
      WHERE ${posterId} >= 0.7
      ORDER BY ${posterId} DESC
    `);
    return NextResponse.json({ titleSimilarityMatrix }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
