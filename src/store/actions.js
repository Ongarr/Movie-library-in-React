import { moviesAction } from './movies-slice';
import { connectionAction } from './connection-slice';

const apiKey = 'ae56d5e33eecc34a48f563c98dd330ad';

export const fetchMoviesFromQuery = (query, page) => {
  return async (dispatch) => {
    const fetchData = async () => {
      let response = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-EN&query=${query}&page=${page}&include_adult=false`,
      );

      if (!response.ok) {
        throw new Error('Fetching movies data failed');
      }

      let { results, total_pages } = await response.json();

      dispatch(moviesAction.SET_MOVIES(results));
      dispatch(moviesAction.SET_PAGES(total_pages));
    };

    try {
      await fetchData();
    } catch (error) {
      dispatch(
        connectionAction.SET_CONNECTION_ERROR('SMTH GOES WRONG!'),
      );
    }
  };
};
