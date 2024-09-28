import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/Prisma';
import { Poster } from '@prisma/client';

export async function GET() {
  try {
    const posters = await prisma.poster.findMany();
    return NextResponse.json({ posters }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
