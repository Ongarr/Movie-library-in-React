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

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  // componentWillMount() {
  //   console.log('[App.js] componentWillMount');
  // }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }
  
  getMovie = async (event, page = 1) => {
    
    const apiCall = async (event, page = 1) => {
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
    }
    
    if (this.state.currentQuery === false || this.state.movies === false ) {
      moviesArr = <NoInput info={''}></NoInput>
    }
    
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
            {pages}
            
            { this.state.currentPage > 1 ?
            <ButtonPrevPage buttonText= {'Prev Page'} prevPage={ () => this.getMovie(this.state.currentQuery, this.state.currentPage - 1) }/>
            : null
            }
            { this.state.pages > 1 ?
            <ButtonNextPage buttonText= {'Next Page'} nextPage={ () => this.getMovie(this.state.currentQuery, this.state.currentPage + 1) }/>
            : null
            }
            
          </section>
        </div>
      </div>
    );
  }
}

export default App;
