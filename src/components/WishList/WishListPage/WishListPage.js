import React, { useState, useEffect } from "react";
import MovieTile from '../../MovieTile/MovieTile';
import { Link } from "react-router-dom";


const WishListPage = () => {
  
  const [listenStorageOperation, setListenStorageOperation] = useState(1);
  const [sessionData, setSessionData] = useState([]);

  

  function getThisStorageData() {
    
    let sessionArray = [];

    Object.entries(sessionStorage).map(([key, data]) => {
      console.log(data.id)
      sessionArray.push(JSON.parse(data))
      return sessionArray
      
    })

    return setSessionData(sessionArray)
  }


  useEffect(() => {
    getThisStorageData()
    
    console.log('ding')
  }, [listenStorageOperation]);

  
  return <div>
    <h2>Your wishlist</h2>
    <small>Watch`em all!</small>
    <Link to="/">
            <button>Back to mainpage</button>
    </Link>
    <MovieTile movies={sessionData} setListenStorageOperation={setListenStorageOperation} listenStorageOperation={listenStorageOperation} />
  </div>;
};

export default WishListPage;