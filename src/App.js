import React, { Component } from 'react';
import './App.css';
import MovieTile from './MovieTile/MovieTile';
import SearchForm from './SearchForm/SearchForm';
import getMovie from './fetchMovie';
import Pagination from './Pagination/Pagination';
import './MovieTile/Movietile.css'
import './Pagination/Pagination.css'




class App extends Component {
    
  state = {
    movies: [
    
    ],
    pages: ['1']
  }
  
  movieQuery = (event, pageSwitcher = 2) => {
    getMovie(event.target.value, pageSwitcher)
      .then(data => this.setState({ movies: data.results, pages: data.total_pages }))
      .catch(err => console.log(err))
  }

  pageSwitcher = (e) => {
    return e.target.innerHTML;
  }

  render() {

    let pageArr = [];
    for(let i=1; i <= this.state.pages; i++) {
      pageArr.push(<Pagination pagenumber={ i } switchpage={this.pageSwitcher}/>)
    }
    

    const moviesArr = [...this.state.movies].map(movie => {
      return <MovieTile  title={ movie.title } imgpath={`https://image.tmdb.org/t/p/w154/${movie.poster_path}`} />
    })


    return (
      <div className="App">
        <header className="App-header">
          <h1>MovieDubie</h1>
          <SearchForm changed={ this.movieQuery } />
        </header>
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
