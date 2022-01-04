import { Fallback } from 'components';
import { Loader } from 'components/widgets';

import use from './hooks';
import Details from './details';

export default (props) => {
  const { error, fetching, interview } = use(props);

  switch (true) {
    case !!fetching:
      return <Loader />;
    case !!error:
      return <Fallback error={error} />;
    default:
      return <Details interview={interview} />;
  }
};
