import { NextResponse } from 'next/server';

import { prisma } from '@/lib/prisma';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const venues = await prisma.venue.findMany({
      orderBy: { name: 'asc' },
    });

    return NextResponse.json(venues);
  } catch {
    return NextResponse.json([
      {
        id: 'demo-1',
        name: '10-G10 Multimedia',
        currentStatus: 'CLOSED',
      },
      {
        id: 'demo-2',
        name: '10-120 Computer Sciences',
        currentStatus: 'CLOSED',
      },
      {
        id: 'demo-3',
        name: '10-262 Computer System Engineering',
        currentStatus: 'CLOSED',
      },
    ]);
  }
}
