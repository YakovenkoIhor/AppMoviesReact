import React from 'react';
import { SearchOutlined } from '@ant-design/icons';
import { Button, Space } from 'antd';

const ButtonSearchAntd = () => (
  <Space direction="vertical">
    <Space wrap>
      <Button type="primary" icon={<SearchOutlined />}>
        Search
      </Button>
    </Space>
  </Space>
);
export default ButtonSearchAntd;