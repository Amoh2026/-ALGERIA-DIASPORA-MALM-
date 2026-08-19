interface RateLimitStore {
  [key: string]: {
    count: number;
    resetTime: number;
  };
}

const store: RateLimitStore = {};
const WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const MAX_REQUESTS = 5; // Max 5 submissions per IP per window

export async function checkRateLimit(ip: string): Promise<{ allowed: boolean; remaining: number; resetTime: Date }> {
  const now = Date.now();
  const key = ip;
  
  // Clean expired entries
  if (store[key] && store[key].resetTime < now) {
    delete store[key];
  }
  
  // Initialize or get existing
  if (!store[key]) {
    store[key] = {
      count: 0,
      resetTime: now + WINDOW_MS,
    };
  }
  
  const record = store[key];
  
  // Check if limit exceeded
  if (record.count >= MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      resetTime: new Date(record.resetTime),
    };
  }
  
  // Increment counter
  record.count++;
  
  return {
    allowed: true,
    remaining: MAX_REQUESTS - record.count,
    resetTime: new Date(record.resetTime),
  };
}

// Clean up expired entries periodically (every hour)
setInterval(() => {
  const now = Date.now();
  for (const key in store) {
    if (store[key].resetTime < now) {
      delete store[key];
    }
  }
}, 60 * 60 * 1000);