import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import Header from './components/Header/Header';
import MovieTile from './components/MovieTile/MovieTile';
import WhichPage from './components/WhichPage/WhichPage';
import MovieDetail from './components/MovieDetail/MovieDetail';

import Pagination from './components/Pagination/Pagination';

import { getMovies } from './api/MovieDbApi';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  const [movies, setMovies] = useState(false);
  const [pages, setPages] = useState(false);
  const [currentQuery, setCurrentQuery] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [connectionError, setConnectionError] = useState(false);

  function handleCurrentPage(page) {
    return setCurrentPage(page);
  }

  function handleChangeInputSearch(inputValue) {
    return setCurrentQuery(inputValue);
  }

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      console.log('useEffect');
      setIsLoading(true);
      const timeoutOnSearch = setTimeout(() => {
        const setMoviesFromQuery = (data) => {
          setMovies(data.results);
          setPages(data.total_pages);
          return setIsLoading(false);
        };
        const askForMovieFromQuery = async () => {
          try {
            const movies = await getMovies(currentQuery, currentPage);
            return setMoviesFromQuery(movies);
          } catch (error) {
            console.log(error);
            return setConnectionError(true);
          }
        };

        askForMovieFromQuery();
        window.scrollTo(0, 0);
      }, 700);
      return () => {
        clearTimeout(timeoutOnSearch);
      };
    }
  }, [currentQuery, currentPage]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Header onChange={handleChangeInputSearch}></Header>
            {isLoading && currentQuery && <h1>LOADING</h1>}
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

              {currentQuery && !isLoading && (
                <MovieTile movies={movies} />
              )}

              {pages > 0 && (
                <Pagination
                  currentPage={currentPage}
                  isLoading={isLoading}
                  pages={pages}
                  handleCurrentPage={handleCurrentPage}
                />
              )}
            </div>
          </Route>
          <Route path="/movie/:id" component={MovieDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
