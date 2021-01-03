import React from 'react';
import { Redirect } from 'react-router-dom';

import Login from 'containers/Login/Loadable';
import Layout from 'containers/HomePage/Loadable';
import FeaturePage from 'containers/UrbanPage/Loadable';
// import NotFoundPage from 'containers/NotFoundPage/Loadable';

export const PATHS = {
  ROOT: '/',
  LOGIN: '/login',
  DASHBOARD: '/dashboard',
  URBAN: '/dashboard/urban',
  APARTMENT: '/dashboard/apartment',
  RESIDENT: '/dashboard/resident',
};

const ROUTES = [
  {
    path: PATHS.ROOT,
    key: 'ROOT',
    exact: true,
    component: Login,
  },
  {
    path: PATHS.DASHBOARD,
    key: 'DASHBOARD',
    component: props => {
      if (!localStorage.getItem('authenticated')) {
        return <Redirect to="/" />;
      }
      return <Layout {...props} />;
    },
    routes: [
      {
        path: PATHS.DASHBOARD,
        key: 'DASHBOARD_ROOT',
        exact: true,
        component: FeaturePage,
        label: 'Quản lý đô thị',
      },
      // {
      //   path: PATHS.URBAN,
      //   key: 'URBAN',
      //   exact: true,
      //   component: FeaturePage,
      //   label: 'Quản lý đô thị',
      // },
      {
        path: PATHS.APARTMENT,
        key: 'APARTMENT',
        exact: true,
        component: FeaturePage,
        label: 'Quản lý căn hộ',
      },
      {
        path: PATHS.RESIDENT,
        key: 'RESIDENT',
        exact: true,
        component: FeaturePage,
        label: 'Quản lý cư dân',
      },
    ],
  },
];

export default ROUTES;
