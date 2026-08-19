import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@/app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';

const postSchema = z.object({
  title: z.string().min(3),
  content: z.string().min(10),
  category: z.enum(['ANNOUNCEMENT', 'EVENT', 'GENERAL', 'CULTURE']),
});

export async function POST(req: NextRequest) {
  const session = await auth();
  
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  try {
    const body = await req.json();
    const validated = postSchema.parse(body);

    const post = await prisma.post.create({
      data: {
        title: validated.title,
        content: validated.content,
        category: validated.category,
        authorId: session.user.id,
        status: 'PUBLISHED',
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const posts = await prisma.post.findMany({
      where: { status: 'PUBLISHED' },
      orderBy: { createdAt: 'desc' },
      include: {
        author: {
          select: {
            id: true,
            name: true,
          }
        },
        comments: {
          include: {
            author: {
              select: { name: true }
            }
          }
        },
        likes: true,
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}