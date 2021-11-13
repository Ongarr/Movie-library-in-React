import React, { useState, useEffect } from 'react';
import './App.css';
import MovieTile from '../components/MovieTile/MovieTile';
import WhichPage from '../components/WhichPage/WhichPage';
import MovieDetail from '../components/MovieDetail/MovieDetail';

import Pagination from '../components/Pagination/Pagination';

import { getMovies } from '../api/MovieDbApi';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Header from '../components/Header/Header';

function App() {
  const [movies, setMovies] = useState(false);
  const [pages, setPages] = useState(false);
  const [currentQuery, setCurrentQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const [
    listenStorageOperation,
    setListenStorageOperation,
  ] = useState(1);

  function handleChangeInputSearch(inputValue) {
    return setCurrentQuery(inputValue);
  }

  function handleCurrentPage(page) {
    return setCurrentPage(page);
  }

  useEffect(() => {
    const setMoviesFromQuery = async (data) => {
      setMovies(data.results);
      setPages(data.total_pages);
      return setIsLoading(false);
    };

    const askForMovieFromQuery = async () => {
      setIsLoading(true);
      try {
        const movies = await getMovies(currentQuery, currentPage);
        return setMoviesFromQuery(movies);
      } catch (error) {
        console.log(error);
        return setConnectionError(true);
      }
    };

    if (currentQuery === '') {
      console.log('nope');
      setMovies(false);
      setPages(false);
      setCurrentPage(1);
    } else {
      askForMovieFromQuery();
      window.scrollTo(0, 0);
    }
  }, [currentQuery, currentPage]);

  return (
    <div className="App">
      <Router>
        <Header
          onChange={handleChangeInputSearch}
          currentQuery={currentQuery}
        ></Header>
        <Switch>
          <Route path="/" exact>
            {pages && !isLoading && (
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

              {currentQuery && (
                <MovieTile
                  movies={movies}
                  setListenStorageOperation={
                    setListenStorageOperation
                  }
                  listenStorageOperation={listenStorageOperation}
                />
              )}

              <Pagination
                currentPage={currentPage}
                isLoading={isLoading}
                pages={pages}
                handleCurrentPage={handleCurrentPage}
              />
            </div>
          </Route>
          <Route path="/movie/:id" component={MovieDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
