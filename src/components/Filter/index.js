import React  from 'react';
import { Input } from 'antd';

const { Search } = Input;

function Filter({ onSearch, searchValue, onSearchChange }) {
  return (
    <Search
      placeholder="Input search text"
      allowClear
      onSearch={onSearch}
      onChange={(e) => onSearchChange(e.target.value)}
      style={{ width: 200 }}
      value={searchValue}
    />
  );
}

export default Filter;
