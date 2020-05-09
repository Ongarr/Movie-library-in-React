import {apiKey} from '../../apiCall';
import React, { useState, useEffect } from 'react';

import {Link} from 'react-router-dom';
import noPosterImg from '../../assets/no-poster.png';
import {movieSimplyDetailApi} from '../../apiCall';
import {movieCastApi} from '../../apiCall';
import { MovieWrapper, List, Cast, BasicInfo, Button, Overview, Title, Rating } from './MovieDetailStyle'




const MovieDetail = ({ match }) => {

    const [movieId] = useState(match.params.id);
    const [movieInfo, setMovieInfo] = useState([]);
    const [movieCast, setMovieCast] = useState([]);

    

    useEffect(() => {
        getMovieDetail();
        getMovieCast();
    }, [movieId])
    



    const getMovieDetail = async () => {
        const fetchMovieDetail =  await fetch (movieSimplyDetailApi(movieId, apiKey))
        setMovieInfo(await fetchMovieDetail.json());
    }

    const getMovieCast = async () => {
        const fetchMovieCast = await fetch (movieCastApi(movieId, apiKey))
        const {cast} = await fetchMovieCast.json()
        setMovieCast(cast);
    }

    const checkForPoster = movieInfo.poster_path === null ? noPosterImg : `https://image.tmdb.org/t/p/w342/${movieInfo.poster_path}`;

    return (
        <MovieWrapper>
            <BasicInfo>
            <div><img src={ checkForPoster} alt={movieInfo.title}></img></div>
           <div>
               <Title>{movieInfo.title}</Title>
               <Rating>Rating {movieInfo.vote_average}</Rating>
               <Overview>{movieInfo.overview}</Overview>
               <Link to="/" ><Button>Go Back</Button></Link>
           </div>
           </BasicInfo>
           <Cast>
           <h2>Cast:</h2>
           <List>
           {
           movieCast.map((actor) => 
                <div>
                    <p>Character: {actor.character}</p>
                    <p>Actor: {actor.name}</p>
               </div>
           )
           }
           </List>
           </Cast>
           
        </MovieWrapper>
    )
}

export default MovieDetail;



