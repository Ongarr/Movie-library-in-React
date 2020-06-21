import React, { useState, useEffect } from "react";
import MovieTile from '../../MovieTile/MovieTile'


const WishListPage = () => {

const [sessionData, setSessionData] = useState([])



const sessionMovie = Object.entries(sessionStorage);


useEffect (() => {
 

  sessionMovie.map(([key, data]) => {
    const movieData = JSON.parse(data);
    return sessionData.push(movieData);
 });
}, [sessionData])
 




  return <div>
    <h2>Your wishlist</h2>
    <small>Watch`em all!</small>
    <MovieTile movies={sessionData} />
  </div>;
};

export default WishListPage;