import React, { useState } from 'react';
import { Input } from './SearchFormStyle';

const SearchForm = ({ changed }) => {
  const [enteredMovieTitle, setEnteredMovieTitle] = useState(null);

  const movieInputChangeHandler = (event) => {
    const enteredMovieIsValid = event.target.value.trim() !== '';

    if (enteredMovieIsValid) {
      return (
        setEnteredMovieTitle(event.target.value),
        changed(enteredMovieTitle)
      );
    }
    return setEnteredMovieTitle(null);
  };

  return (
    <Input
      placeholder="Start typing to search movie..."
      type="text"
      onChange={movieInputChangeHandler}
      input={enteredMovieTitle}
    />
  );
};

export default SearchForm;
