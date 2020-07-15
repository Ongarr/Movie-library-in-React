export const getMovies = async (query, page) => {
  let data = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-EN&query=${query}&page=${page}&include_adult=false`,
  );
  return data.json();
};

export const movieDetailApi = async (movieId) => {
  let data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`,
  );
  return data.json();
};

export const movieCastApi = async (movieId) => {
  let data = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`,
  );
  return data.json();
};

export const topMovieApi = async (page) => {
  let data = await fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=${apiKey}&language=en-US&page=${page}`,
  );
  return data.json();
};

const apiKey = 'ae56d5e33eecc34a48f563c98dd330ad';
