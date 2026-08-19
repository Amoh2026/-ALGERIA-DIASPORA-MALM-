import { prisma } from './prisma';

export interface AuditData {
  action: string;
  userId?: string;
  details?: any;
  ipAddress?: string;
  userAgent?: string;
}

export async function logAudit(data: AuditData) {
  try {
    await prisma.auditLog.create({
      data: {
        action: data.action,
        userId: data.userId || 'anonymous',
        details: data.details ? JSON.stringify(data.details) : null,
        ipAddress: data.ipAddress || 'unknown',
        userAgent: data.userAgent || 'unknown',
        timestamp: new Date(),
      },
    });
  } catch (error) {
    console.error('Failed to log audit:', error);
    // Don't throw - audit logging should not break the application
  }
}