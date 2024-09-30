import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma/Prisma';

export async function GET() {
  try {
    const posters = await prisma.poster.findMany();
    return NextResponse.json({ posters }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { posters } = await req.json();
    const createdPosters = await prisma.poster.createMany({
      data: posters,
    });
    return NextResponse.json({ createdPosters }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
