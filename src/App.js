import React, { useState } from 'react';
import './App.css';
import data from './data/data';

import { Row, Col, Divider, Typography } from 'antd';

import Filter from './components/Filter';
import DataTable from './components/DataTable';

const rows = data.data.map((item) => ({ ...item, key: item.id }));

const { Title } = Typography;

function App() {
  const [ search, setSearch ] = useState('');

  return (
    <div className="app">
      <Row>
        <Col span={20} offset={1}>
          <Title level={3}>
            Dektry knowledgebase
          </Title>
          <Filter
            searchValue={search}
            onSearchChange={setSearch}
            onSearch={() => console.log(search)}
          />
          <Divider />
          <DataTable
            rows={rows}
            sections={data.sections}
            search={search}
          />
        </Col>
      </Row>
    </div>
  );
}

export default App;
