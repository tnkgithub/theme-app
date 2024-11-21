import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma/Prisma';
import cluster from 'cluster';

export async function GET(req: NextRequest) {
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

    const clusterData = clusters.map((cluster) => ({
      id: cluster.id,
      repWord1: cluster.repWord1 || null,
      repWord2: cluster.repWord2 || null,
      repWord3: cluster.repWord3 || null,
      repWord4: cluster.repWord4 || null,
      repWord5: cluster.repWord5 || null,
      posters: cluster.posters.map((poster) => ({
        posterId: poster.posterId,
        title: poster.title,
      })),
    }));

    return NextResponse.json({ clusterData }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
