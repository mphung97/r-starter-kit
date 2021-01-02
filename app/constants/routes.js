import React from 'react';

const paths = {
  ROOT: '/',
  DASHBOARD: '/dashboard',
  URBAN: '/dashboard/urban',
};

const ROUTES = [
  {
    path: paths.ROOT,
    key: 'ROOT',
    exact: true,
    component: () => <h1>Log in</h1>,
  },
  {
    path: paths.DASHBOARD,
    key: 'DASHBOARD',
    component: () => <h1>App</h1>,
    routes: [
      {
        path: paths.DASHBOARD,
        key: 'DASHBOARD_ROOT',
        exact: true,
        component: () => <h1>DASHBOARD</h1>,
      },
      {
        path: paths.URBAN,
        key: 'URBAN',
        exact: true,
        component: () => <h1>URBAN</h1>,
      },
    ],
  },
];

export default ROUTES;
