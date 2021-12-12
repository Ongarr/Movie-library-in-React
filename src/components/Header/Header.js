import React from 'react';
import SearchForm from './SearchForm/SearchForm';

import { Link } from 'react-router-dom';

import { AppHeader } from './HeaderStyle';

const Header = () => {
  return (
    <AppHeader>
      <Link to="/" onClick={() => {}}>
        <h1 className="logo-title">MovieDubie</h1>
      </Link>
      <SearchForm />
    </AppHeader>
  );
};

export default Header;
