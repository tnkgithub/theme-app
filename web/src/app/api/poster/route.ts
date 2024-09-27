import { prisma } from '@/lib/Prisma';
import { NextResponse } from 'next/server';
import { Poster } from '@prisma/client';

export const connect = async () => {
  try {
    prisma.$connect();
  } catch (error) {
    console.error(error);
  }
};

export const GET = async () => {
  try {
    await connect();
    const posters: Poster[] = await prisma.poster.findMany();
    return NextResponse.json({ posters }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: 'Error' }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
};
