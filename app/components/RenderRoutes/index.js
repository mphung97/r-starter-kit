import React from 'react';
import { Route, Switch } from 'react-router-dom';
import RouteWithSubRoutes from '../RouteWithSubRoutes';
/**
 * Use this component for any new section of routes (any config object that has a "routes" property
 */
export default ({ routes }) => (
  <Switch>
    {routes.map(route => (
      <RouteWithSubRoutes key={route.key} {...route} />
    ))}
    <Route component={() => <h1>Not Found!</h1>} />
  </Switch>
);
