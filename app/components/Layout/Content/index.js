import React from 'react';
import PropTypes from 'prop-types';

export default function Content({ children }) {
  return <div className="d-content">{children}</div>;
}

Content.propTypes = {
  children: PropTypes.node,
};
