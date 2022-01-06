import { Buffer } from 'buffer';
import crypto from 'crypto';

export function sign({
  apiKey = 'TrZfzjeUSRKfT70PqXmzJg',
  apiSecret = 'ZT2qZE8ggMaFPkZBRXfBkOuApfpShqfub1RC',
  meetingNumber = 4373219238,
  password = 'VnZkNmlpcjN2dE1KOHBUYnowaisxZz09',
  role = 1,
  userName = 'deus morto',
} = {}) {
  const timestamp = new Date().getTime() - 30000;
  const msg = Buffer.from(apiKey + meetingNumber + timestamp + role).toString(
    'base64'
  );
  const hash = crypto
    .createHmac('sha256', apiSecret)
    .update(msg)
    .digest('base64');
  const signature = Buffer.from(
    `${apiKey}.${meetingNumber}.${timestamp}.${role}.${hash}`
  ).toString('base64');

  return { apiKey, meetingNumber, password, signature, userName };
}
