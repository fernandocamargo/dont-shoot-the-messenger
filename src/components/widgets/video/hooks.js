import { useCallback, useEffect, useMemo, useRef } from 'react';

import { useLatency } from 'hooks';
import { useZoom } from 'hooks/clients';

import { sign } from './helpers';

export default ({ details, identify }) => {
  const ref = useRef();
  const client = useZoom();
  const { pending: fetching, watch } = useLatency();
  const userName = useMemo(() => identify(details), [details, identify]);
  const fetch = useCallback(() => {
    watch(
      client
        .init({ debug: false, language: 'en-US', zoomAppRoot: ref.current })
        .then(() =>
          client.join(
            sign({
              apiKey: 'TrZfzjeUSRKfT70PqXmzJg',
              apiSecret: 'ZT2qZE8ggMaFPkZBRXfBkOuApfpShqfub1RC',
              meetingNumber: 4373219238,
              password: 'VnZkNmlpcjN2dE1KOHBUYnowaisxZz09',
              role: 1,
              userName,
            })
          )
        )
        .then(() => client.record('start'))
    );

    return client.leaveMeeting;
  }, [client, userName, watch]);

  useEffect(() => fetch(), [fetch]);

  return { fetching, ref };
};
