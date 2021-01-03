/*
 * FeaturePage
 *
 * List all the features
 */
import Title from 'antd/lib/typography/Title';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function FeaturePage() {
  return (
    <>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <Title level={3}>Feature Page</Title>
    </>
  );
}
