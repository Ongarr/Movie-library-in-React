import React, { useState, useEffect } from 'react';
import './App.css';
import MovieTile from '../components/MovieTile/MovieTile';
import SearchForm from '../components/SearchForm/SearchForm';
import WhichPage from '../components/WhichPage/WhichPage';
import ButtonNextPage from '../components/ButtonNextPage/ButtonNextPage';
import ButtonPrevPage from '../components/ButtonPrevPage/ButtonPrevPage';




function App() {
    const [movies, setMovies] = useState(false);
    const [pages, setPages] = useState(false)
    const [currentQuery, setCurrentQuery] = useState('star wars')
    const [currentPage, setCurrentPage] = useState(1)

    const key = 'ae56d5e33eecc34a48f563c98dd330ad';

    useEffect(() => {
      if (currentQuery !== '') {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-EN&query=${currentQuery}&page=${currentPage}&include_adult=true`)
        .then(res => res.json())
        .then(data => {
          setMovies(data.results)
          setPages(data.total_pages)
        })
        .catch(err => console.log(err))
      } else {
        return;
      }
    }, [currentQuery, currentPage]);

    

    const prevPage = () => {
      setCurrentPage(currentPage - 1)
    };

    const nextPage = () => {
      setCurrentPage(currentPage + 1)
    };

    const notOnPageOne = currentPage > 1;
    const notOnFirstPage = pages >= 1 && currentPage !== pages;
    
    const currentPageInfo = pages ? <WhichPage key={currentPage} pageuare={`You are on page ${currentPage} of ${pages}`}/> : null
    
  
    return (
      <div className="App">
        <header className="App-header">
          <h1>MovieDubie</h1>
          <SearchForm changed={ event => setCurrentQuery(event.target.value)} />
        </header>

        {currentPageInfo}
        <div className="movies-wrapper">
            
            { movies === false ? null :
            <MovieTile movies={movies}/>
            }
          <section className="paginations">
            {currentPageInfo}
            
            { notOnPageOne ?
            <ButtonPrevPage buttonText= {'Prev Page'} prevPage={ prevPage }/>
            : null
            }
            { notOnFirstPage ?
            <ButtonNextPage buttonText= {'Next Page'} nextPage={ nextPage }/>
            : null
            }
            
          </section>
        </div>
      </div>
    );
          }


export default App;
