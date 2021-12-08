import crypto from 'crypto';
import Zoom from '@zoomus/websdk/embedded';
import { useEffect, useMemo, useRef } from 'react';

function generateSignature(
  apiKey,
  apiSecret,
  meetingNumber,
  role,
  password,
  userName
) {
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

export default () => {
  const ref = useRef();
  const client = useMemo(() => Zoom.createClient(), []);

  useEffect(() => {
    client.init({ debug: false, language: 'en-US', zoomAppRoot: ref.current });
    client.join(
      generateSignature(
        'rfP89GA2Slu_ShYNGlNBKQ',
        'NMXs9MnwfcTbDtoFnPjaUJwbpo0mpGfh3bH2',
        86395457626,
        0,
        'pX5KvE',
        'deus morto'
      )
    );

    return () => {};
  }, [client]);

  return { ref };
};
