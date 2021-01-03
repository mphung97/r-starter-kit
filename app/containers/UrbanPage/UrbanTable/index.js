import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Space, Table, Switch, Button } from 'antd';
import Edit from '../EditModal';

export default function UrbanTable({ data, loading }) {
  const columns = [
    {
      title: 'STT',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Tên',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Địa chỉ',
      dataIndex: 'address',
      key: 'address',
    },
    {
      title: 'Thao tác',
      key: 'action',
      render: (text, record) => (
        <Space size="middle">
          <Switch defaultChecked={record.status} onChange={() => {}} />
          <Button type="link" onClick={() => showModal(record)}>
            Edit
          </Button>
        </Space>
      ),
    },
  ];

  const [visible, setVisible] = useState(false);
  const [selectedData, setSelectedData] = useState(null);

  const showModal = record => {
    setSelectedData(record);
    setVisible(true);
  };

  const handleOk = () => {
    setSelectedData(null);
    setVisible(false);
  };

  const handleCancel = () => {
    setSelectedData(null);
    setVisible(false);
  };

  return (
    <>
      <Table
        rowKey={record => record.id}
        columns={columns}
        dataSource={data}
        loading={loading}
      />
      <Edit
        data={selectedData}
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
}

UrbanTable.propTypes = {
  data: PropTypes.array,
  loading: PropTypes.bool,
};
