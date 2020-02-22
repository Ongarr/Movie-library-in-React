import React from 'react';
import logo from './logo.svg';
import './App.css';
import api from './movie';

const apiRequest = new api();

const movie = 'bean';

apiRequest.getMovie(movie)
  .then(data => updateUI(data))
  .catch(err => console.log(err))

  const updateUI = (data) => {
    const { results, total_results, total_pages } = data;

    console.log(results)
    console.log(total_results)
    console.log(total_pages)
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
