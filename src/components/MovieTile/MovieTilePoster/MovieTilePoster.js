import React, { useState, useEffect, useCallback } from "react";
import noPosterImg from "../../../assets/no-poster.png";
import { Img, Loader, Button, Wrapper } from "./MovieTilePosterStyle";

const iconWishListSVG = <svg id="Capa_1" enable-background="new 0 0 512.07 512.07" height="20" viewBox="0 0 512.07 512.07" width="20" xmlns="http://www.w3.org/2000/svg"><g><path d="m509.759 194.639c-6.152-18.858-22.945-31.043-42.781-31.043h-127.918l-40.282-122.33c-6.192-18.805-22.95-30.926-42.729-30.926-.063 0-.128 0-.191.001-19.86.078-36.611 12.349-42.674 31.262l-39.108 121.993h-128.983c-19.886 0-36.692 12.226-42.814 31.146-6.123 18.92.335 38.674 16.453 50.324l104.361 75.434-40.17 121.991c-6.217 18.88.133 38.662 16.177 50.396 8.058 5.894 17.307 8.842 26.562 8.842 9.171-.001 18.347-2.897 26.365-8.693l104.542-75.563 103.3 75.436c16.026 11.704 36.781 11.76 52.873.147s22.575-31.328 16.518-50.227l-39.218-122.329 103.474-75.563c16.02-11.698 22.396-31.441 16.243-50.298zm-33.935 26.07-120.959 88.332 45.825 142.946c3.085 9.621-3.435 15.247-5.506 16.742s-9.465 5.91-17.625-.05l-120.901-88.289-122.206 88.333c-8.201 5.927-15.576 1.461-17.642-.05-2.065-1.511-8.558-7.187-5.392-16.8l47.033-142.833-122.145-88.287c-8.206-5.932-6.272-14.34-5.484-16.775s4.146-10.382 14.271-10.382h150.87l45.79-142.835c3.087-9.629 11.668-10.41 14.225-10.421h.052c2.62 0 11.113.769 14.255 10.309l47.07 142.947h149.624c10.1 0 13.469 7.92 14.261 10.348s2.74 10.81-5.416 16.765z"/></g></svg>;

const MovieTilePoster = ({ movie }) => {
  const [Loading, setLoading] = useState(true);
  const [inWishList, setInWishList] = useState('');
  
  

  const checkWishList = useCallback(() => {
    if (sessionStorage.getItem(movie.title)) {
      return setInWishList(true);
    }
    return setInWishList(false);

  }, [movie.title]) 

  const saveToWishList = useCallback(() => {
    if ( inWishList===true) {
      setInWishList(false);
    return sessionStorage.removeItem(movie.title);
    }
      setInWishList(true);
    return sessionStorage.setItem(movie.title, JSON.stringify(movie));
  }, [inWishList, movie])

  const checkForPoster =
    movie.poster_path === null
      ? noPosterImg
      : `https://image.tmdb.org/t/p/w185${movie.poster_path}`;

  useEffect(() => {
    checkWishList();
  }, [checkWishList, inWishList]);



  return (
    <Wrapper>
      {Loading ? (
        <Loader>
          <div className="lds-ring">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </Loader>
      ) : null}
      <Img
        src={checkForPoster}
        forStyle={Loading}
        onLoad={() => setLoading(false)}
        alt={movie.title}
      ></Img>
      <Button onClick={saveToWishList}>{inWishList ? 'X' : iconWishListSVG}</Button>
    </Wrapper>
  );
};

export default MovieTilePoster;
