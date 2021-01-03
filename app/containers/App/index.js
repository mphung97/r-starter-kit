/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import { Helmet } from 'react-helmet';

import { RenderRoutes } from 'components';

import ROUTES from '../../routes';

export default function App() {
  return (
    <div>
      <Helmet titleTemplate="%s -Dashboard" defaultTitle="Dashboard">
        <meta name="description" content="Dashboard application" />
      </Helmet>
      <RenderRoutes routes={ROUTES} />
    </div>
  );
}
