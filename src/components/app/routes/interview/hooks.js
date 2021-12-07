import { useState } from 'react';

export default (props) => {
  const [state] = useState({ filters: [], questions: [] });

  return { ...state };
};
