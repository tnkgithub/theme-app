import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

// PosterテーブルのrepresentationsCoordinateカラムがnullでないデータのidのみを取得し、値に基づいてソートして返す
export async function GET() {
  try {
    const posters = await prisma.poster.findMany({
      where: {
        representationsCoordinate: {
          not: null,
        },
      },
      select: {
        id: true,
        posterId: true,
        representationsCoordinate: true,
      },
      orderBy: {
        representationsCoordinate: 'asc', // 'desc' にすれば降順
      },
    });
    return NextResponse.json({ posters }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
