import { configureStore } from '@reduxjs/toolkit';

import moviesReducer from './movies-slice';
import connectionReducer from './connection-slice';

const store = configureStore(
  {
    reducer: {
      movies: moviesReducer,
      connection: connectionReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
