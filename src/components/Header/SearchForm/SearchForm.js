import React from 'react';
import { Input } from './SearchFormStyle';

const SearchForm = (props) => {
  return (
    <Input
      placeholder="Type for search movie..."
      type="text"
      onChange={props.changed}
    />
  );
};

export default SearchForm;
