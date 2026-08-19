import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const eventSchema = z.object({
  title: z.string().min(3),
  description: z.string().min(10),
  date: z.string().datetime(),
  location: z.string().min(2),
  maxAttendees: z.number().optional(),
});

export async function POST(req: NextRequest) {
  const session = await auth();
  
  if (!session || session.user?.role !== 'ADMIN') {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const validated = eventSchema.parse(body);

    const event = await prisma.event.create({
      data: {
        title: validated.title,
        description: validated.description,
        date: new Date(validated.date),
        location: validated.location,
        maxAttendees: validated.maxAttendees || null,
        createdBy: session.user.id,
      },
    });

    return NextResponse.json(event, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const events = await prisma.event.findMany({
      orderBy: { date: 'asc' },
      include: {
        registrations: {
          include: {
            user: {
              select: {
                id: true,
                name: true,
                email: true,
              }
            }
          }
        }
      }
    });

    return NextResponse.json(events);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}