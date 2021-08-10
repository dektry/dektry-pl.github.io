import React  from 'react';
import { Table, Tag, Typography } from 'antd';
import { contains } from '../../helpers/data';
import { getTypeColor } from '../../helpers/color';

const columns = [
  {
    title: 'Type',
    width: '10%',
    dataIndex: 'type',
    render: type => (
      <Tag color={getTypeColor(type)} key={type}>
        {type.toUpperCase()}
      </Tag>
    )
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: '20%',
  },
  {
    title: 'Link',
    dataIndex: 'link',
    width: '30%',
    render: text => <a href={text}>{text}</a>,
  },
  {
    title: 'Description',
    width: '40%',
    dataIndex: 'description',
  },
];


function DataTable({ search, sections, rows }) {
  return (
    sections.map((section, index) => (
      <div
        key={section}
      >
        <Typography>{section}</Typography>
        <Table
          columns={columns}
          dataSource={rows.filter(row => row.section === section && (!search || contains(row, search)))}
          pagination={{
            pageSize: 10,
          }}
        />
      </div>
    ))
  );
}

export default DataTable;
