import React, { useState } from "react";
import noPosterImg from "../../../assets/no-poster.png";
import { Img, Loader } from "./MovieTilePosterStyle";

const MovieTilePoster = ({ movie }) => {
  const [Loading, setLoading] = useState(true);

  const checkForPoster =
    movie.poster_path === null
      ? noPosterImg
      : `https://image.tmdb.org/t/p/w185${movie.poster_path}`;

  return (
    <div>
      {Loading ? (
        <Loader className="loader">
          <p>Loading...</p>
        </Loader>
      ) : null}
      <Img
        src={checkForPoster}
        forStyle={Loading}
        onLoad={() => setLoading(false)}
        alt={movie.title}
      />
    </div>
  );
};

export default MovieTilePoster;
