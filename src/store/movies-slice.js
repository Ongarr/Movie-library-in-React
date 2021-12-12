import { createSlice } from '@reduxjs/toolkit';

const initialStateMovies = {
  apiKey: 'ae56d5e33eecc34a48f563c98dd330ad',
  movies: [],
  pages: false,
  currentQuery: null,
  currentPage: 1,
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState: initialStateMovies,
  reducers: {
    SET_MOVIES(state, action) {
      state.movies = action.payload;
    },
    SET_PAGES(state, action) {
      state.pages = action.payload;
    },
    SET_CURRENT_QUERY(state, action) {
      state.currentQuery = action.payload;
    },
    SET_CURRENT_PAGE(state, action) {
      state.currentPage = action.payload;
    },
  },
});

export const moviesAction = moviesSlice.actions;

export default moviesSlice.reducer;
