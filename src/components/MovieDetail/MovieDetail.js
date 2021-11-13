import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';
import { movieDetailApi } from '../../api/MovieDbApi';
import { movieCastApi } from '../../api/MovieDbApi';
import MovieTilePoster from '../MovieTile/MovieTilePoster/MovieTilePoster';
import {
  MovieWrapper,
  List,
  Cast,
  BasicInfo,
  Button,
  Overview,
  Title,
  Rating,
  Actor,
  BasicInfoWrapper,
} from './MovieDetailStyle';

const MovieDetail = (props) => {
  const [movieInfo, setMovieInfo] = useState({});
  const [movieCast, setMovieCast] = useState([]);
  const [loading, setLoading] = useState(false);

  const movieId = props.match.params.id;

  useEffect(() => {
    setLoading(true);
    Promise.all([
      movieDetailApi(movieId),
      movieCastApi(movieId),
    ]).then(([details, cast]) => {
      setMovieInfo(details);
      setMovieCast(cast.cast);
      setLoading(false);
    });
  }, [movieId]);

  return (
    <MovieWrapper>
      {loading ? (
        <h1>Loading</h1>
      ) : (
        <div>
          <BasicInfoWrapper>
            <BasicInfo>
              <MovieTilePoster
                movie={movieInfo}
                size="342"
              ></MovieTilePoster>
              <div>
                <Title>{movieInfo.title}</Title>
                <Rating>Rating {movieInfo.vote_average}</Rating>
                <Overview>{movieInfo.overview}</Overview>

                <Link to="/">
                  <Button>Go Back</Button>
                </Link>
              </div>
            </BasicInfo>
          </BasicInfoWrapper>
          <Cast>
            <h2>Cast:</h2>
            <List>
              {movieCast.map((actor, i) => (
                <Actor key={i}>
                  <p>Character: {actor.character}</p>
                  <p>Actor: {actor.name}</p>
                </Actor>
              ))}
            </List>
          </Cast>
        </div>
      )}
    </MovieWrapper>
  );
};

export default MovieDetail;
