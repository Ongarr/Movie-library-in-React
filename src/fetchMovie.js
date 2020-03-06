const getMovie = async (movie, page) => {
    const key = 'ae56d5e33eecc34a48f563c98dd330ad';
    const baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=';
    const movieQuery = `${baseUrl}${key}&language=en-EN&query=${movie}&page=${page}&include_adult=false`;
    const response = await fetch(movieQuery);
    const data = await response.json();
    return data;
}

export default getMovie;