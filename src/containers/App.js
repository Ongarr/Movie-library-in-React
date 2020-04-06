import React, { Component } from 'react';
import './App.css';
import MovieTile from '../components/MovieTile/MovieTile';
import SearchForm from '../components/SearchForm/SearchForm';
import WhichPage from '../components/WhichPage/WhichPage';
import NoInput from '../components/NoInput/NoInput';
import ButtonNextPage from '../components/ButtonNextPage/ButtonNextPage';
import ButtonPrevPage from '../components/ButtonPrevPage/ButtonPrevPage';




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
  
  getMovies = (event, page = 1) => {
    
    this.setState({ currentQuery: event })
    this.setState({ currentPage: page })

    const apiCall = async (event, page = 1) => {
    
    const key = 'ae56d5e33eecc34a48f563c98dd330ad';
    const baseUrl = 'https://api.themoviedb.org/3/search/movie?api_key=';
    const movieQuery = `${baseUrl}${key}&language=en-EN&query=${event}&page=${page}&include_adult=false`;
    
    this.setState({ isLoading: true });
    
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

    
    let pages = [];
    if (this.state.pages !== false) {
      pages.push(<WhichPage key={this.state.currentPage} pageuare={`You are on page ${this.state.currentPage} of ${this.state.pages}`}/>)
    } else {
      pages.push(<WhichPage key={null} pageuare={``}/>)
    }

    let errorField;
    if ( this.state.connectionErr === true) {
      errorField = <NoInput info={'connection error, check your network'}></NoInput>
    } else {
      errorField = <NoInput info={null}></NoInput>
    }

    const notOnPageOne = this.state.currentPage > 1;
    const notOnFirstPage = this.state.pages > 1;
     
    
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>MovieDubie</h1>
          <SearchForm changed={ event => this.getMovies(event.target.value) } />
        </header>
        {errorField}
        {pages}
        <div className="movies-wrapper">
          
            <MovieTile movies={this.state.movies}/>
          
          <section className="paginations">
            {pages}
            
            { notOnPageOne ?
            <ButtonPrevPage buttonText= {'Prev Page'} prevPage={ () => this.getMovies(this.state.currentQuery, this.state.currentPage - 1) }/>
            : null
            }
            { notOnFirstPage ?
            <ButtonNextPage buttonText= {'Next Page'} nextPage={ () => this.getMovies(this.state.currentQuery, this.state.currentPage + 1) }/>
            : null
            }
            
          </section>
        </div>
      </div>
    );
  }
}

export default App;
