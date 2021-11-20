import React from 'react';
import { Input } from './SearchFormStyle';

const SearchForm = ({ changed, currentQuery }) => {
  return (
    <Input
      placeholder="Start typing to search movie..."
      type="text"
      onChange={changed}
    />
  );
};

export default SearchForm;
