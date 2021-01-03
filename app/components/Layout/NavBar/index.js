import React from 'react';
import PropTypes from 'prop-types';

export default function NavBar({ children }) {
  return (
    <div
      className="d-navbar"
      style={{
        backgroundColor: '#f5f5f5',
      }}
    >
      {children}
    </div>
  );
}

NavBar.propTypes = {
  children: PropTypes.node,
};
