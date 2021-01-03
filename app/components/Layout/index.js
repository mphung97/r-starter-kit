import React from 'react';
import PropTypes from 'prop-types';

import './index.scss';

export { default as SideBar } from './SideBar';
export { default as Content } from './Content';
export { default as NavBar } from './NavBar';

export default function Layout({ children }) {
  return <div className="d-layout">{children}</div>;
}

Layout.propTypes = {
  children: PropTypes.node,
};
