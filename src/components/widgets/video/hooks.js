import { Buffer } from 'buffer';
import crypto from 'crypto';
import noop from 'lodash/noop';
import { ZoomMtg } from '@zoomus/websdk';
import { useEffect, useRef } from 'react';

export function generateSignature(
  apiKey = 'TrZfzjeUSRKfT70PqXmzJg',
  apiSecret = 'ZT2qZE8ggMaFPkZBRXfBkOuApfpShqfub1RC',
  meetingNumber = 4373219238,
  role = 1,
  passWord = 'VnZkNmlpcjN2dE1KOHBUYnowaisxZz09',
  userName = 'deus morto'
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

  return { apiKey, meetingNumber, passWord, signature, userName };
}

export const lib = ZoomMtg.setZoomJSLib(
  `//${window.location.host}/zoom`,
  '/av'
);

export const wasm = ZoomMtg.preLoadWasm();

export class Client {
  static destroy = () =>
    new Promise((success, error) =>
      ZoomMtg.getCurrentMeetingInfo({ error, success })
    )
      .then(Client.leave)
      .catch(noop);

  // .appendChild(document.getElementById('zmmtg-root'));
  static init = (root) => {
    console.log({ root });

    return new Promise((success, error) => {
      ZoomMtg.prepareWebSDK();

      return ZoomMtg.init({
        leaveUrl: window.location.href,
        screenShare: true,
        error,
        success,
      });
    }).then(this.join);
  };

  static join = () =>
    new Promise((success, error) =>
      ZoomMtg.join({ ...generateSignature(), error, success })
    );

  static leave = () =>
    new Promise((success, error) => ZoomMtg.leaveMeeting({ error, success }));
}

export default () => {
  const ref = useRef();

  useEffect(() => {
    Client.init(ref.current);

    return () => Client.destroy();
  }, []);

  return { ref };
};

/*
import Zoom from '@zoomus/websdk/embedded';
import { useEffect, useRef } from 'react';



export const client = Zoom.createClient();

export default () => {
  const ref = useRef();

  useEffect(() => {
    client
      .init({ debug: false, language: 'en-US', zoomAppRoot: ref.current })
      .then(() => client.join(generateSignature()))
      .then(() => client.record('start'));

    return () => client.leaveMeeting();
  }, []);

  return { ref };
};
*/
