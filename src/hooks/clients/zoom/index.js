import Zoom from '@zoomus/websdk/embedded';

export const client = Zoom.createClient();

export default () => client;
