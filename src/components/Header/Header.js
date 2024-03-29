import React from 'react';
import SearchForm from './SearchForm/SearchForm';

import { Link } from 'react-router-dom';

import { AppHeader } from './HeaderStyle';

const Header = ({ onChange }) => {
  return (
    <AppHeader>
      <Link
        to="/"
        onClick={() => {
          onChange('');
        }}
      >
        <h1 className="logo-title">MovieDubie</h1>
      </Link>
      <SearchForm changed={onChange} />
    </AppHeader>
  );
};

export default Header;
