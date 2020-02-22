export default class Movie {
    
    key = 'ae56d5e33eecc34a48f563c98dd330ad';
    baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=';

    getMovie = async (movie) => {
        const movieQuery = `${this.baseUrl}${this.key}&language=en-EN&query=${movie}&page=1&include_adult=false`;
        const response = await fetch(movieQuery);
        const data = await response.json(); 
        return data;
    }
    
}