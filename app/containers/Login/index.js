import React from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { Form, Input, Button, Row, Col } from 'antd';

import { PATHS } from '../../routes';

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

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
    <Row style={{ marginTop: '10rem' }}>
      <Col span={12} offset={6}>
        <Form
          {...layout}
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

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
