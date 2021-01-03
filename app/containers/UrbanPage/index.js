/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Modal, Typography } from 'antd';
import { Helmet } from 'react-helmet';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';

import reducer from './reducer';
import saga from './saga';
import { makeSelectData, makeSelectPending } from './selectors';
import { fetchUrbansPending } from './actions';

import Table from './UrbanTable';
import Create from './CreateModal';

const key = 'urbans';

const { Title } = Typography;
const { Search } = Input;

const totalCount = 100; // get from BE;

export default function UrbanPage() {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  const dispatch = useDispatch();
  const urbansData = useSelector(makeSelectData);
  const pending = useSelector(makeSelectPending);

  const [visible, setVisible] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  useEffect(() => {
    dispatch(fetchUrbansPending(pagination));
  }, []);

  const handleTableChange = (newPagination, filters, sorter) => {
    setPagination(newPagination);
    dispatch(fetchUrbansPending(newPagination));
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <>
      <Helmet>
        <title>Urbans Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Title level={3}>Danh sách khu đô thị</Title>
        <div
          style={{
            display: 'flex',
          }}
        >
          {/* <Search
            placeholder="input search text"
            onSearch={() => {}}
            enterButton
          /> */}
          <Button type="primary" onClick={showModal}>
            Thêm mới
          </Button>
        </div>
      </div>
      <Table
        data={urbansData}
        pagination={{ ...pagination, total: totalCount }}
        loading={pending}
        onChange={handleTableChange}
      />
      <Create
        visible={visible}
        handleOk={handleOk}
        handleCancel={handleCancel}
      />
    </>
  );
}
