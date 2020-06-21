import React, { useState, useEffect, useCallback } from "react";

import { Link } from "react-router-dom";
import noPosterImg from "../../assets/no-poster.png";
import { movieDetailApi } from "../../apiCall";
import { movieCastApi } from "../../apiCall";
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
  AddToList,
} from "./MovieDetailStyle";
import WishListIcon from "../WishList/WishListIcon/WishListIcon";

const MovieDetail = ({ match }) => {
  const [movieId] = useState(match.params.id);
  const [movieInfo, setMovieInfo] = useState([]);
  const [movieCast, setMovieCast] = useState([]);
  const [inWishList, setInWishList] = useState('');

  const checkWishList = useCallback(() => {
    if (sessionStorage.getItem(movieInfo.title)) {
      return setInWishList(true);
    }
    return setInWishList(false);

  }, [movieInfo.title])

  const saveToWishList = useCallback(() => {
    if ( inWishList===true) {
    return sessionStorage.removeItem(movieInfo.title);
    }
    return sessionStorage.setItem(movieInfo.title, JSON.stringify(movieInfo));
  }, [inWishList, movieInfo])

  useEffect(() => {
    const getMovieDetail = async () => {
      let data = await movieDetailApi(movieId);
      return setMovieInfo(data);
    };
    const getMovieCast = async () => {
      const data = await movieCastApi(movieId);
      return setMovieCast(data.cast);
    };
    getMovieDetail();
    getMovieCast();
    checkWishList();
  }, [movieId, checkWishList, saveToWishList]);

  const checkForPoster =
    movieInfo.poster_path === null
      ? noPosterImg
      : `https://image.tmdb.org/t/p/w342/${movieInfo.poster_path}`;


  return (
    <MovieWrapper>
      <WishListIcon></WishListIcon>
      <BasicInfo>
        <div>
          <img src={checkForPoster} alt={movieInfo.title}></img>
        </div>
        <div>
          <Title>{movieInfo.title}</Title>
          <Rating>Rating {movieInfo.vote_average}</Rating>
          <Overview>{movieInfo.overview}</Overview>
          <AddToList onClick={saveToWishList}>{inWishList ? 'Remove from watchlist' : 'Add to watchlist'}</AddToList>
          <Link to="/">
            <Button>Go Back</Button>
          </Link>
        </div>
      </BasicInfo>
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
    </MovieWrapper>
  );
};

export default MovieDetail;
