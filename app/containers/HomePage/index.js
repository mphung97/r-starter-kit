/* eslint-disable no-unused-vars */
/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { Button } from 'antd';
import { useHistory } from 'react-router-dom';
import { RenderRoutes, Layout, SideBar, NavBar, Content } from 'components';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import reducer from './reducer';
import saga from './saga';

const key = 'home';

export function HomePage({ routes, ...rest }) {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const history = useHistory();

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="Application homepage" />
      </Helmet>
      <Layout>
        <SideBar routes={routes} />
        <div
          style={{
            flex: 1,
          }}
        >
          <NavBar>
            <Button
              type="text"
              onClick={() => {
                localStorage.removeItem('authenticated');
                history.push('/');
              }}
            >
              Logout
            </Button>
          </NavBar>
          <Content>
            <RenderRoutes routes={routes} />
          </Content>
        </div>
      </Layout>
    </>
  );
}

HomePage.propTypes = {
  routes: PropTypes.array,
};

export default memo(HomePage);
