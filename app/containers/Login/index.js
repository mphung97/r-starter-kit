import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';

import { PATHS } from '../../routes';

export default function Login() {
  const history = useHistory();

  // "log in" a user
  const onFinish = values => {
    console.log('Success:', values);
    localStorage.setItem('authenticated', true);
    history.push(PATHS.DASHBOARD);
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  // if user already "authenticated", redirect them to the app
  if (localStorage.getItem('authenticated')) {
    return <Redirect to={PATHS.DASHBOARD} />;
  }

  return (
    <Row style={{ paddingTop: '10rem' }}>
      <Col span={6} offset={9}>
        <Form
          layout="vertical"
          name="login"
          initialValues={{
            remember: false,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          {/* <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item> */}

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
