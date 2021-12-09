import React, { useMemo } from 'react';

import use from './hooks';

export default ({ className, ...props }) => {
  const { dangerouslySetInnerHTML, expandable, expanded, ref, toogle } =
    use(props);
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
          <h3>Actions:</h3>
          <ul>
            <li>
              <a href="/" onClick={toogle} title={{ action }}>
                {action}
              </a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};
