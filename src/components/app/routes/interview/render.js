import { Fallback } from 'components';
import { Loader } from 'components/widgets';

import use from './hooks';
import Details from './details';

export default (props) => {
  const { error, fetching, interview } = use(props);

  switch (true) {
    case !!interview.details:
      return <Details interview={interview} />;
    case !!error:
      return <Fallback error={error} />;
    case !!fetching:
    default:
      return <Loader />;
  }
};
