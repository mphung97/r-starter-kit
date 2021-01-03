/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useRef } from 'react';
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

export default function Edit({ data, visible, handleOk, handleCancel }) {
  const editRef = useRef(null);

  useEffect(() => {
    if (editRef && editRef.current && data) {
      editRef.current.setFieldsValue({
        name: data.name,
        address: data.address,
        description: data.description,
      });
    }
  }, [editRef, data]);

  return (
    <Modal
      title="Cập nhật thông tin khu đô thị"
      visible={visible}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={null}
    >
      <Form
        ref={editRef}
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
