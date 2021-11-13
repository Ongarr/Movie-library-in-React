import React, { useState } from 'react';
import noPosterImg from '../../../assets/no-poster.png';
import { Img, Loader, Wrapper } from './MovieTilePosterStyle';

const MovieTilePoster = ({ movie, size }) => {
  const [Loading, setLoading] = useState(true);

  const checkForPoster =
    movie.poster_path === null
      ? noPosterImg
      : `https://image.tmdb.org/t/p/w${size}${movie.poster_path}`;

  return (
    <Wrapper>
      {Loading ? (
        <Loader size={size}>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Loader>
      ) : null}
      <Img
        onLoad={() => setLoading(false)}
        src={checkForPoster}
        forStyle={Loading}
        alt={movie.title}
        size={size}
      ></Img>
    </Wrapper>
  );
};

export default MovieTilePoster;
