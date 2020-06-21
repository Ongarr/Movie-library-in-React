import React, { useState, useEffect } from "react";
import "./App.css";
import MovieTile from "../components/MovieTile/MovieTile";
import SearchForm from "../components/SearchForm/SearchForm";
import WhichPage from "../components/WhichPage/WhichPage";
import ButtonPageControl from "../components/ButtonPageControl/ButtonPageControl";
import MovieDetail from "../components/MovieDetail/MovieDetail";
import WishListIcon from "../components/WishList/WishListIcon/WishListIcon";
import WishListPage from "../components/WishList/WishListPage/WishListPage";

import { getMovies, topMovieApi } from "../apiCall";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState(false);
  const [pages, setPages] = useState(false);
  const [currentQuery, setCurrentQuery] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [connectionError, setConnectionError] = useState(false);
  const [infoMovieListing, setInfoMovieListing] = useState(false);

  const resolvedMovie = async (data) => {
    setMovies(data.results);
    setPages(data.total_pages);
    setInfoMovieListing(false);
    return setIsLoading(false);
  };

  const resolvedTopMovie = async (data) => {
    setMovies(data.results);
    setPages(data.total_pages);
    setInfoMovieListing("In Theaters");
    return setIsLoading(false);
  };

  const resolveTopMovies = async () => {
    try {
      const topMovies = await topMovieApi(currentPage);
      return resolvedTopMovie(topMovies);
    } catch (error) {
      return setConnectionError(true);
    }
  };

  const resolveMovies = async () => {
    setIsLoading(true);
    try {
      const movies = await getMovies(currentQuery, currentPage);
      return resolvedMovie(movies);
    } catch (error) {
      return setConnectionError(true);
    }
  };

  useEffect(() => {
 
    resolveTopMovies();
    currentQuery ? resolveMovies() : resolveTopMovies();
  }, [currentQuery]);

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const testForPrevButton = currentPage > 1 && !isLoading;
  const testForNextButton = pages >= 1 && currentPage !== pages && !isLoading;

  const currentPageInfo =
    pages && !isLoading ? (
      <WhichPage
        key={currentPage}
        pageInfoText={`You are on page ${currentPage} of ${pages}`}
      />
    ) : null;

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <header className="App-header">
              <h1>MovieDubie</h1>
              <WishListIcon></WishListIcon>
              <SearchForm
                changed={(event) => setCurrentQuery(event.target.value)}
              />
              <button onClick={resolveTopMovies}>IN theater</button>
            </header>

            {currentPageInfo}
            <div className="movies-wrapper">
              {connectionError ? (
                <h1 style={{ color: "white" }}>Connection Error</h1>
              ) : null}

              {infoMovieListing ? (
                <h1 style={{ color: "white" }}>{infoMovieListing}</h1>
              ) : null}

              {!isLoading && movies.length === 0 && (
                <h1 style={{ color: "white" }}>
                  Sorry, there is no such movie in database
                </h1>
              )}

              {!isLoading ? (
                <MovieTile movies={movies} />
              ) : (
                <div className="loader">Loading...</div>
              )}

              <section className="paginations">
                {currentPageInfo}
                <div className="pag-buttons">
                  {testForPrevButton ? (
                    <ButtonPageControl
                      buttonText={"Prev Page"}
                      pageSwitcher={prevPage}
                    />
                  ) : null}
                  {testForNextButton ? (
                    <ButtonPageControl
                      buttonText={"Next Page"}
                      pageSwitcher={nextPage}
                    />
                  ) : null}
                </div>
              </section>
            </div>
          </Route>
          <Route path="/movie/:id" component={MovieDetail} />
          <Route path="/wishlist" component={WishListPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
