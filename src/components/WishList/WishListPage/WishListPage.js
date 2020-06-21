import React from "react";

import MovieTile from '../../MovieTile/MovieTile'


const WishListPage = () => {

let sessionStorageMovies = Object.entries(sessionStorage);

const storageMoviesData = [];

sessionStorageMovies.map(([key, data]) => {
   const movieData = JSON.parse(data);
   return storageMoviesData.push(movieData); 
});

console.log(storageMoviesData)

  return <div>
    <h2>Your wishlist</h2>
    <small>Watch`em all!</small>
    <MovieTile movies={storageMoviesData} />
  </div>;
};

export default WishListPage;