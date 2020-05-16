export const moviesListingApi = (query, page) => `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-EN&query=${query}&page=${page}&include_adult=false`
;

export const movieSimplyDetailApi = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`;

export const movieCastApi = (movieId) => `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${apiKey}`;

export const apiKey = 'ae56d5e33eecc34a48f563c98dd330ad';