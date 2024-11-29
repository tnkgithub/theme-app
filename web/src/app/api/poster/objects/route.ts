import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

export async function GET() {
  try {
    const objects = await prisma.objectWord.findMany({
      select: {
        word: true,
        posters: {
          select: {
            posterId: true,
          },
        },
      },
    });
    return NextResponse.json({ objects }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'No object words found' },
      { status: 404 }
    );
  }
}
