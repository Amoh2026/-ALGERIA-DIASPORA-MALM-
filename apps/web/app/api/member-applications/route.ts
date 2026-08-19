import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { z } from 'zod';
import { encrypt } from '@/lib/encryption';
import { checkRateLimit } from '@/lib/rateLimit';
import { logAudit } from '@/lib/audit';
import { getServerSession } from 'next-auth';
import { auth } from '@/lib/auth';

// Validation schema
const applicationSchema = z.object({
  firstName: z.string().min(1, "Förnamn krävs"),
  lastName: z.string().min(1, "Efternamn krävs"),
  personalNumber: z.string()
    .min(1, "Personnummer krävs")
    .regex(/^\d{6}-\d{4}$/, "Ogiltigt personnummer format (ÅÅMMDD-XXXX)"),
  gender: z.string().optional(),
  phone: z.string()
    .min(1, "Telefonnummer krävs")
    .regex(/^[0-9\s\-+]+$/, "Ogiltigt telefonnummer"),
  email: z.string()
    .email("Ogiltig e-postadress")
    .min(1, "E-post krävs"),
  address: z.string().min(1, "Adress krävs"),
  postalCode: z.string().optional(),
  city: z.string().optional(),
  children: z.string().optional(),
  ageGroup: z.string().min(1, "Åldersgrupp krävs"),
  paymentMethod: z.string().default("Swish"),
  paymentReference: z.string().optional(),
  gdprConsent: z.boolean().default(true),
});

export async function POST(req: NextRequest) {
  try {
    // 1. Get IP and User-Agent
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0] || 
               req.headers.get('x-real-ip') || 
               'unknown';
    const userAgent = req.headers.get('user-agent') || 'unknown';

    // 2. Rate limiting
    const rateLimit = await checkRateLimit(ip);
    if (!rateLimit.allowed) {
      await logAudit({
        action: 'RATE_LIMIT_EXCEEDED',
        ipAddress: ip,
        userAgent,
        details: { message: 'Too many registration attempts' },
      });
      return NextResponse.json(
        { error: 'För många försök. Vänligen vänta 15 minuter.' },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Reset': rateLimit.resetTime.toISOString(),
            'X-RateLimit-Remaining': '0',
          }
        }
      );
    }

    // 3. Parse and validate body
    const body = await req.json();
    const validated = applicationSchema.parse(body);

    // 4. Check if email already used
    const existingApplication = await prisma.memberApplication.findFirst({
      where: { email: encrypt(validated.email) },
    });
    
    if (existingApplication) {
      await logAudit({
        action: 'DUPLICATE_APPLICATION',
        ipAddress: ip,
        userAgent,
        details: { email: validated.email },
      });
      return NextResponse.json(
        { error: 'Denna e-postadress har redan använts för en ansökan.' },
        { status: 409 }
      );
    }

    // 5. Encrypt sensitive data
    const encryptedData = {
      personalNumber: encrypt(validated.personalNumber),
      phone: encrypt(validated.phone),
      email: encrypt(validated.email),
      address: encrypt(validated.address),
      children: validated.children ? encrypt(validated.children) : '',
    };

    // 6. Create application in database
    const application = await prisma.memberApplication.create({
      data: {
        firstName: validated.firstName,
        lastName: validated.lastName,
        personalNumber: encryptedData.personalNumber,
        gender: validated.gender || '',
        phone: encryptedData.phone,
        email: encryptedData.email,
        address: encryptedData.address,
        postalCode: validated.postalCode || '',
        city: validated.city || '',
        children: encryptedData.children,
        ageGroup: validated.ageGroup,
        paymentMethod: validated.paymentMethod,
        paymentReference: validated.paymentReference || '',
        gdprConsent: validated.gdprConsent,
        ipAddress: ip,
        userAgent: userAgent,
        status: 'PENDING',
      },
    });

    // 7. Log audit
    await logAudit({
      action: 'MEMBER_APPLICATION_SUBMITTED',
      ipAddress: ip,
      userAgent,
      details: { 
        applicationId: application.id,
        name: `${validated.firstName} ${validated.lastName}`,
        email: validated.email,
      },
    });

    // 8. Return success
    return NextResponse.json(
      { 
        success: true, 
        message: 'Ansökan skickad!',
        applicationId: application.id,
        rateLimit: {
          remaining: rateLimit.remaining,
          resetTime: rateLimit.resetTime,
        }
      }, 
      { 
        status: 201,
        headers: {
          'X-RateLimit-Remaining': rateLimit.remaining.toString(),
          'X-RateLimit-Reset': rateLimit.resetTime.toISOString(),
        }
      }
    );

  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        { 
          success: false, 
          errors: error.errors.map(e => ({
            field: e.path.join('.'),
            message: e.message,
          }))
        }, 
        { status: 400 }
      );
    }
    
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { 
        success: false, 
        message: 'Ett fel uppstod. Vänligen försök igen.' 
      }, 
      { status: 500 }
    );
  }
}

// GET - Admin only - Fetch applications
export async function GET(req: NextRequest) {
  try {
    const session = await auth();
    
    // Check if user is authenticated and is admin
    if (!session || session.user?.role !== 'ADMIN') {
      await logAudit({
        action: 'UNAUTHORIZED_ACCESS_ATTEMPT',
        userId: session?.user?.id || 'unknown',
        ipAddress: req.headers.get('x-forwarded-for') || 'unknown',
        details: { path: '/api/member-applications' },
      });
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(req.url);
    const status = searchParams.get('status');
    const limit = parseInt(searchParams.get('limit') || '100');
    const offset = parseInt(searchParams.get('offset') || '0');
    
    const where = status ? { status } : {};
    
    const [applications, total] = await Promise.all([
      prisma.memberApplication.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        take: limit,
        skip: offset,
        select: {
          id: true,
          firstName: true,
          lastName: true,
          personalNumber: true,
          gender: true,
          phone: true,
          email: true,
          address: true,
          postalCode: true,
          city: true,
          children: true,
          ageGroup: true,
          paymentMethod: true,
          paymentReference: true,
          gdprConsent: true,
          status: true,
          createdAt: true,
          updatedAt: true,
          processedAt: true,
          processedBy: true,
        },
      }),
      prisma.memberApplication.count({ where }),
    ]);

    // Decrypt sensitive data for admin view
    const decryptedApplications = applications.map(app => ({
      ...app,
      personalNumber: app.personalNumber ? 'ENCRYPTED' : null,
      phone: app.phone ? 'ENCRYPTED' : null,
      email: app.email ? 'ENCRYPTED' : null,
      address: app.address ? 'ENCRYPTED' : null,
      children: app.children ? 'ENCRYPTED' : null,
    }));

    await logAudit({
      action: 'VIEW_APPLICATIONS',
      userId: session.user.id,
      ipAddress: req.headers.get('x-forwarded-for') || 'unknown',
      details: { 
        total,
        limit,
        offset,
        status: status || 'ALL',
      },
    });

    return NextResponse.json({
      data: decryptedApplications,
      pagination: {
        total,
        limit,
        offset,
        hasMore: offset + limit < total,
      },
    });

  } catch (error) {
    console.error('Error fetching applications:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}