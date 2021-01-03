import React from 'react';
import PropTypes from 'prop-types';

export default function NavBar({ children }) {
  return <div className="d-navbar">{children}</div>;
}

NavBar.propTypes = {
  children: PropTypes.node,
};
