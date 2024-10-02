import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

// PosterテーブルのrepresentaionCoordinateカラムの値を取得する
export async function GET() {
  try {
    const posters = await prisma.poster.findMany({
      // 条件を指定する: representationsCoordinateカラムがnullでないもの
      where: {
        representationsCoordinate: {
          not: null,
        },
      },
      // 取得するカラムを指定する: id, representationsCoordinate
      select: {
        id: true,
        representationsCoordinate: true,
      },
    });
    return NextResponse.json({ posters }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
