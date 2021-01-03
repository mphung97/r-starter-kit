import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from 'antd';
import { useHistory } from 'react-router-dom';

/**
 * Render a nested hierarchy of route configs with unknown depth/breadth
 */
function displayRouteMenu(routes, history) {
  /**
   * Render a single route as a list item link to the config's pathname
   */
  function singleRoute(route) {
    return (
      <Menu.Item
        key={route.path}
        onClick={() => history.push(route.path)}
        style={{ textTransform: 'uppercase' }}
      >
        {route.label}
      </Menu.Item>
    );
  }

  // loop through the array of routes and generate an unordered list
  return (
    <Menu
      onClick={() => {}}
      style={{ width: 255, borderRight: 'none' }}
      selectedKeys={[history.location.pathname]}
      mode="inline"
    >
      {routes.map(route => {
        // if this route has sub-routes, then show the ROOT as a list item and recursively render a nested list of route links
        if (route.routes) {
          return (
            <React.Fragment key={route.key}>
              {singleRoute(route)}
              {displayRouteMenu(route.routes)}
            </React.Fragment>
          );
        }

        // no nested routes, so just render a single route
        return singleRoute(route);
      })}
    </Menu>
  );
}

export default function Sidebar({ routes }) {
  const history = useHistory();

  return (
    <div className="d-sidebar">
      <div
        className="logo"
        style={{
          backgroundColor: '#f5f5f5',
        }}
      />
      {displayRouteMenu(routes, history)}
    </div>
  );
}

Sidebar.propTypes = {
  routes: PropTypes.array,
};
