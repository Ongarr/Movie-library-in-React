import React, { Component } from 'react';
import './App.css';
import MovieTile from './MovieTile/MovieTile';
import SearchForm from './SearchForm/SearchForm';
import Pagination from './Pagination/Pagination';
import WhichPage from './WhichPage/WhichPage';
import NoInput from './NoInput/NoInput';




class App extends Component {
    
  state = {
    movies: false,
    pages: false,
    currentQuery: '',
    currentPage: [],
    ids: [],
    isLoading: false,
    inputValue: [],
    connectionErr: false
  }

  
  getMovie = async (event, page = 1) => {
    
    const apiCall = async (event, page) => {
    this.setState({ currentQuery: event })
    this.setState({ currentPage: page })
    const key = 'ae56d5e33eecc34a48f563c98dd330ad';
    const baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=';
    const movieQuery = `${baseUrl}${key}&language=en-EN&query=${event}&page=${page}&include_adult=false`;
    this.setState({ isLoading: false });
    
    if (event !== '') {
    const response = await fetch(movieQuery)
      .then(data =>  {
          if (!data.ok) {
              console.log('NOOOO', data.status);
              this.setState({
                movies: false,
                pages: false,
                currentQuery: false,
                connectionErr: true
              });
          } else {
            this.setState({
              connectionErr: false
            });
          return data;
          }
      })
      .catch(err => {console.log('nope', err); this.setState({connectionErr: true})})
    const data = await response.json();
    console.log(data)
    return data;
    } else {
      this.setState({
        pages: false,
        movies: false
      })
    }
  }

    apiCall(event, page)
      .then(data => this.setState({movies: data.results, pages: data.total_pages}))
      .catch(err => console.log(err))

  }



  render() {

    let moviesArr = [];
    if(this.state.movies !== false && this.state.currentQuery !== '') {
      moviesArr = [...this.state.movies].map(movie => {
        return <MovieTile key={ movie.id } title={ movie.title } imgpath={movie.poster_path === null ? 'https://via.placeholder.com/185x278?text=No+poster' :`https://image.tmdb.org/t/p/w185/${movie.poster_path}`} />
      })
      console.log('its fine')
    }
    
    
    
    if (this.state.currentQuery === false || this.state.movies === false ) {
      moviesArr.push(<NoInput info={''}></NoInput>)
    }

    let pageArr = [];
    for(let i=1; i <= this.state.pages; i++) {
      pageArr = <Pagination key={ i }pagenumber={ i } switchpage={() => this.getMovie(this.state.currentQuery, i)}/>
    }
    
    let pages = [];
    if (this.state.pages !== false) {
      pages.push(<WhichPage pageuare={`You are on page ${this.state.currentPage} of ${this.state.pages}`}/>)
    } else {
      pages.push(<WhichPage pageuare={``}/>)
    }

    let errorField = [];
    if ( this.state.connectionErr === true) {
      errorField.push(<NoInput info={'connection error, check your network'}></NoInput>)
    } else {
      errorField = <NoInput info={''}></NoInput>
    }
    
    
  
    



    return (
      <div className="App">
        <header className="App-header">
          <h1>MovieDubie</h1>
          <SearchForm changed={ event => this.getMovie(event.target.value) } />
        </header>
        {errorField}
        {pages}
        <div className="movies-wrapper">
          <section className="movie-listing">
            {moviesArr}
          </section>
          <section className="paginations">
            {pageArr}
          </section>
        </div>
      </div>
    );
  }
}

export default App;
