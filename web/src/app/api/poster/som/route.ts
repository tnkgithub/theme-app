import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

// PosterテーブルのsomCoordinateとidのみを取得し、値に基づいてソートして返す
export async function GET() {
  try {
    const posters = await prisma.poster.findMany({
      select: {
        posterId: true,
        somCoordinate: true,
      },
      orderBy: {
        somCoordinate: 'asc', // 'desc' にすれば降順
      },
    });
    return NextResponse.json({ posters }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
