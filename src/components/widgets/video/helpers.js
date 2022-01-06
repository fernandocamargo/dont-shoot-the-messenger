import { Buffer } from 'buffer';
import crypto from 'crypto';

export const sign = ({
  apiKey,
  apiSecret,
  meetingNumber,
  password,
  role,
  userName,
}) => {
  const timestamp = new Date().getTime() - 30000;
  const signature = Buffer.from(
    [
      apiKey,
      meetingNumber,
      timestamp,
      role,
      crypto
        .createHmac('sha256', apiSecret)
        .update(
          Buffer.from(
            [apiKey, meetingNumber, timestamp, role].join('')
          ).toString('base64')
        )
        .digest('base64'),
    ].join('.')
  ).toString('base64');

  return { apiKey, meetingNumber, password, signature, userName };
};
