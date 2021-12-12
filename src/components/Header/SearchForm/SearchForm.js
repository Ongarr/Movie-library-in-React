import React from 'react';
import { Input } from './SearchFormStyle';
import { useDispatch, useSelector } from 'react-redux';
import { moviesAction } from '../../../store/movies-slice';

const SearchForm = () => {
  const dispatch = useDispatch();

  const currentQuery = useSelector(
    (state) => state.movies.currentQuery,
  );

  const movieInputChangeHandler = (event) => {
    const enteredMovieIsValid = event.target.value.trim() !== '';

    if (enteredMovieIsValid) {
      return dispatch(
        moviesAction.SET_CURRENT_QUERY(event.target.value),
      );
    }
    return dispatch(moviesAction.SET_CURRENT_QUERY(null));
  };

  return (
    <Input
      placeholder={
        currentQuery
          ? currentQuery
          : 'Start typing to search movie...'
      }
      type="text"
      onChange={movieInputChangeHandler}
      input={currentQuery}
    />
  );
};

export default SearchForm;
