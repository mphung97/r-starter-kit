/* eslint-disable react/prop-types */
/* eslint-disable no-template-curly-in-string */
import React from 'react';
import { Button, Form, Input, Modal } from 'antd';

const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
};

export default function Create({ visible, handleOk, handleCancel }) {
  return (
    <Modal
      title="Thêm mới khu đô thị"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        layout="vertical"
        name="nest-messages"
        onFinish={() => {}}
        validateMessages={validateMessages}
      >
        <Form.Item
          name="name"
          label="Tên khu đô thị"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="address" label="Địa chỉ" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="description" label="Mô tả">
          <Input.TextArea />
        </Form.Item>
        <Form.Item>
          <Button key="back" onClick={handleCancel}>
            Hủy
          </Button>
          <Button
            htmlType="submit"
            key="submit"
            type="primary"
            loading={false}
            onClick={handleOk}
          >
            Thêm mới
          </Button>
        </Form.Item>
      </Form>
    </Modal>
  );
}
