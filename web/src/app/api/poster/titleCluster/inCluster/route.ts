import { NextResponse, NextRequest } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

export async function GET(req: NextRequest) {
  // urlのクエリパラメータを取得
  const { searchParams } = new URL(req.url);
  const clusterId = searchParams.get('clusterId');

  if (!clusterId) {
    return NextResponse.json(
      { error: 'Invalid query parameter' },
      { status: 400 }
    );
  }

  try {
    const cluster = await prisma.cluster.findFirst({
      where: {
        id: Number(clusterId),
      },
      select: {
        id: true,
        repWord1: true,
        repWord2: true,
        repWord3: true,
        repWord4: true,
        repWord5: true,
        posters: {
          select: {
            posterId: true,
            title: true,
            description: true,
          },
        },
      },
    });

    return NextResponse.json({ cluster }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
