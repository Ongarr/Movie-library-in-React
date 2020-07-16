import React from 'react';
import { Input } from './SearchFormStyle';

const SearchForm = ({ changed, currentQuery }) => {
  return (
    <Input
      placeholder="Type for search movie..."
      type="text"
      onChange={changed}
      value={currentQuery}
    />
  );
};

export default SearchForm;
