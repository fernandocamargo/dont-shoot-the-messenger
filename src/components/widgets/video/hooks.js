import { useCallback, useEffect, useRef } from 'react';

import { useLatency } from 'hooks';
import { useZoom } from 'hooks/clients';

import { sign } from './helpers';

export default () => {
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
        .then(() =>
          client.join(
            sign({
              apiKey: 'TrZfzjeUSRKfT70PqXmzJg',
              apiSecret: 'ZT2qZE8ggMaFPkZBRXfBkOuApfpShqfub1RC',
              meetingNumber: 4373219238,
              password: 'VnZkNmlpcjN2dE1KOHBUYnowaisxZz09',
              role: 1,
              userName: 'deus morto',
            })
          )
        )
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
