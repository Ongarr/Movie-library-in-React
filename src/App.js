import React from 'react';
import logo from './logo.svg';
import './App.css';
import api from './fetchMovie';

const apiRequest = new api();


const movie = 'smerfy';
apiRequest.getMovie(movie)
  .then(data => updateUI(data))
  .catch(err => console.log(err))

  const updateUI = (data) => {
    const { results, total_results: totalResults, total_pages: totalPages } = data;
    console.log('Total results: ', totalResults);
    console.log('Pages of results:', totalPages);


    results.forEach(result => {
      
      const imageUrl = `https://image.tmdb.org/t/p/w185${result.poster_path}`;
      console.log(result.title, imageUrl)
       
    });
  }




function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
