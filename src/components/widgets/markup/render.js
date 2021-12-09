import React, { forwardRef, useMemo } from 'react';

import use from './hooks';

export default forwardRef(({ className, ...props }, ref) => {
  const { dangerouslySetInnerHTML, expandable, expanded, toogle } = use(props);
  const action = useMemo(
    () => `Show ${expanded ? 'less' : 'more'}`,
    [expanded]
  );

  return (
    <div className={className} ref={ref}>
      <div
        aria-roledescription="markup"
        dangerouslySetInnerHTML={dangerouslySetInnerHTML}
      />
      {expandable && (
        <nav>
          <button onClick={toogle}>{action}</button>
        </nav>
      )}
    </div>
  );
});
