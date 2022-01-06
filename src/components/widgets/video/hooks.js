import { useCallback, useEffect, useRef } from 'react';

import { useLatency } from 'hooks';
import { useZoom } from 'hooks/clients';

import { sign } from './helpers';

export default (props) => {
  const ref = useRef();
  const client = useZoom();
  const { pending: fetching, watch } = useLatency();
  const fetch = useCallback(() => {
    watch(
      client
        .init({
          customize: { meetingInfo: ['host'] },
          debug: false,
          language: 'en-US',
          zoomAppRoot: ref.current,
        })
        .then(() => client.join(sign()))
        .then(() => client.record('start'))
    );

    return client.leaveMeeting;
  }, [client, watch]);

  useEffect(() => {
    const abort = fetch();

    console.log('mount();');

    return () => console.log('unmount();') || abort();
  }, [fetch]);

  return { fetching, ref };
};

/*
import { Buffer } from 'buffer';
import crypto from 'crypto';
import { useEffect, useRef } from 'react';

export const getCredentials = () => ({
  apiKey: 'TrZfzjeUSRKfT70PqXmzJg',
  apiSecret: 'ZT2qZE8ggMaFPkZBRXfBkOuApfpShqfub1RC',
  meetingNumber: 4373219238,
  passWord: 'VnZkNmlpcjN2dE1KOHBUYnowaisxZz09',
  role: 1,
  userName: 'deus morto',
});

export function generateSignature({
  apiKey,
  apiSecret,
  meetingNumber,
  passWord,
  role,
  userName,
}) {
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

export default () => {
  const ref = useRef();

  useEffect(() => {
    window.navigator.mediaDevices
      .getUserMedia({ audio: true, video: true })
      .then(() =>
        import('@zoomus/websdk').then(({ ZoomMtg }) => {
          ZoomMtg.setZoomJSLib(`//${window.location.host}/zoom`, '/lib/av');
          ZoomMtg.preLoadWasm();
          ZoomMtg.prepareWebSDK();

          return new Promise((success, error) =>
            ZoomMtg.init({
              disablePreview: true,
              leaveUrl: window.location.href,
              meetingInfo: ['host'],
              error,
              success,
            })
          )
            .then(() => generateSignature(getCredentials()))
            .then(
              (signature) =>
                new Promise((success, error) =>
                  ZoomMtg.join({ ...signature, error, success })
                )
            );
        })
      );

    return () => console.log('unmount();');
  }, []);

  return { ref };
};
*/

/*
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

export class Client {
  static destroy = () =>
    new Promise((success, error) =>
      ZoomMtg.getCurrentMeetingInfo({ error, success })
    )
      .then(Client.leave)
      .catch(noop);

  static init = () =>
    new Promise((success, error) => {
      ZoomMtg.setZoomJSLib(`//${window.location.host}/zoom`, '/lib/av');
      ZoomMtg.preLoadWasm();
      ZoomMtg.prepareWebSDK();

      return ZoomMtg.init({
        leaveUrl: window.location.href,
        screenShare: true,
        error,
        success,
      });
    }).then(this.join);

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
    Client.init();

    return () => Client.destroy();
  }, []);

  return { ref };
};
*/

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
