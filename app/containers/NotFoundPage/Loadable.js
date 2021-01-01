/**
 * Asynchronously loads the component for NotFoundPage
 */

import React from 'react';
import loadable from 'utils/loadable';
import { LoadingIndicator } from 'components';

export default loadable(() => import('./index'), {
  fallback: <LoadingIndicator />,
});
