import React, { Fragment } from 'react';
import WhichPage from '../components/WhichPage/WhichPage';
import Header from '../components/Header/Header';
import Pagination from '../components/Pagination/Pagination';

const mainpage = () => {
  return (
    <Fragment>
      <Header></Header>
      {isLoading && currentQuery && <h1>LOADING</h1>}
      {pages && currentQuery !== null && (
        <WhichPage
          key={currentPage}
          pageInfoText={`You are on page ${currentPage} of ${pages}`}
        />
      )}
      <div className="movies-wrapper">
        {connectionError && (
          <h1 style={{ color: 'white' }}>Connection Error</h1>
        )}

        {!isLoading && movies.length === 0 && (
          <h1 style={{ color: 'white' }}>
            Sorry, there is no such movie in database
          </h1>
        )}

        {currentQuery && !isLoading && <MovieTile />}

        {currentQuery !== null && <Pagination />}
      </div>
      ;
    </Fragment>
  );
};

export default mainpage;
