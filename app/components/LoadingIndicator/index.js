import React from 'react';
import { Spin } from 'antd';

import './index.scss';

export default () => (
  <div className="backdrop">
    <Spin tip="Loading..." />
  </div>
);
