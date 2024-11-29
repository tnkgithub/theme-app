import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

export async function GET() {
  try {
    const clusters = await prisma.cluster.findMany({
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
          },
        },
      },
    });

    return NextResponse.json({ clusters }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
