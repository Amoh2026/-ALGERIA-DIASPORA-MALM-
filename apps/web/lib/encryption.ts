import crypto from 'crypto';

// Use environment variable or generate a fallback
const ENCRYPTION_KEY = process.env.ENCRYPTION_KEY || crypto.randomBytes(32).toString('hex');
const IV_LENGTH = 16;
const ALGORITHM = 'aes-256-cbc';

/**
 * Encrypt sensitive data before storing in database
 */
export function encrypt(text: string): string {
  try {
    const iv = crypto.randomBytes(IV_LENGTH);
    const cipher = crypto.createCipheriv(
      ALGORITHM,
      Buffer.from(ENCRYPTION_KEY, 'hex'),
      iv
    );
    let encrypted = cipher.update(text, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return iv.toString('hex') + ':' + encrypted;
  } catch (error) {
    console.error('Encryption error:', error);
    throw new Error('Failed to encrypt data');
  }
}

/**
 * Decrypt sensitive data from database
 */
export function decrypt(text: string): string {
  try {
    const parts = text.split(':');
    if (parts.length !== 2) {
      throw new Error('Invalid encrypted data format');
    }
    const iv = Buffer.from(parts[0], 'hex');
    const encryptedText = Buffer.from(parts[1], 'hex');
    const decipher = crypto.createDecipheriv(
      ALGORITHM,
      Buffer.from(ENCRYPTION_KEY, 'hex'),
      iv
    );
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString('utf8');
  } catch (error) {
    console.error('Decryption error:', error);
    throw new Error('Failed to decrypt data');
  }
}

/**
 * Mask sensitive data for display
 */
export function maskPersonalNumber(pn: string): string {
  if (!pn) return '****';
  return pn.replace(/(\d{6})-\d{4}/, '$1-****');
}

export function maskPhone(phone: string): string {
  if (!phone) return '****';
  return phone.replace(/(\d{3})\d{4}(\d{2})/, '$1****$2');
}

export function maskEmail(email: string): string {
  if (!email) return '****';
  const [local, domain] = email.split('@');
  if (local.length <= 2) return email;
  return local.substring(0, 2) + '****@' + domain;
}

export function maskAddress(address: string): string {
  if (!address) return '****';
  const parts = address.split(',');
  if (parts.length <= 1) return address.substring(0, 10) + '...';
  return parts[0] + ', ****';
}