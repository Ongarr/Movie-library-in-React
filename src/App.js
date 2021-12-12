import React, { useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';

import MovieDetail from './components/MovieDetail/MovieDetail';

import MainPage from './pages/mainPage';
import { connectionAction } from './store/connection-slice';
import { fetchMoviesFromQuery } from './store/actions';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  const isLoading = useSelector(
    (state) => state.connection.isLoading,
  );
  const connectionError = useSelector(
    (state) => state.connection.connectionError,
  );
  const currentPage = useSelector(
    (state) => state.movies.currentPage,
  );
  const currentQuery = useSelector(
    (state) => state.movies.currentQuery,
  );
  const pages = useSelector((state) => state.movies.pages);
  const movies = useSelector((state) => state.movies.movies);

  const initialRender = useRef(true);

  useEffect(() => {
    if (initialRender.current) {
      initialRender.current = false;
    } else {
      dispatch(connectionAction.SET_LOADING(true));
      const timeoutOnSearch = setTimeout(() => {
        dispatch(fetchMoviesFromQuery(currentQuery, currentPage));
        window.scrollTo(0, 0);
      }, 700);
      dispatch(connectionAction.SET_LOADING(false));
      return () => {
        clearTimeout(timeoutOnSearch);
      };
    }
  }, [currentQuery, currentPage, dispatch]);

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={MainPage}>
            <MainPage />
          </Route>
          <Route path="/movie/:id" component={MovieDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
