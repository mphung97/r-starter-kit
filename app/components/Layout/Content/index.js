import React from 'react';
import PropTypes from 'prop-types';

export default function Content({ children }) {
  return (
    <div className="d-content-wrapper">
      <div className="d-content">{children}</div>
    </div>
  );
}

Content.propTypes = {
  children: PropTypes.node,
};
