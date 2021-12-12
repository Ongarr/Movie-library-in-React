import React from 'react';
import MovieTilePoster from './MovieTilePoster/MovieTilePoster';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { MovieList, Tile, Title, P } from './MovieTileStyle';

const MovieTile = React.memo(() => {
  const movies = useSelector((state) => state.movies.movies);
  return (
    <MovieList>
      {movies
        ? movies.map((movie) => (
            <Tile className="movie-tile" key={movie.id}>
              <MovieTilePoster
                movie={movie}
                size="185"
              ></MovieTilePoster>
              <Title>
                <Link to={`/movie/${movie.id}`}>
                  <P>{movie.title}</P>
                </Link>
              </Title>
            </Tile>
          ))
        : null}
    </MovieList>
  );
});

export default MovieTile;
