import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import noPosterImg from '../../assets/no-poster.png';



const MovieWrapper = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    max-width: 1080px;
    padding-top: 100px;
    padding-bottom: 100px;
    margin: auto;
    align-items: center;
    
    @media (max-width: 768px) {
    flex-direction: column;
  }
    
`

const Rating = styled.span `
    color: gold;
    font-size: 1.5em;
    font-weight: bold;
`

const Title = styled.h1 `
    color: white;
    display: block;
    max-width: 80%;
    margin: auto;
    margin-top: 50px;
`
const Overview = styled.p `
    color: white;
    display: block;
    max-width: 80%;
    text-align: justify;
    margin: 25px auto;
    
`

const Button = styled.button `
    padding: 10px 15px;
    width: 80%;
`
const BasicInfo = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: row;
    
    align-items: center;
    
    @media (max-width: 768px) {
    flex-direction: column;
  }
`

const Cast = styled.div `
    color: white;
    

    h2 {
        font-size:40px;
    }
`

const List = styled.div `
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    

    div {
        background-color: hsla(109, 100%, 0%, 0.32);
        padding: 20px;
        
    }

    p {
        margin: 0;
    }
`

const MovieDetail = ({ match }) => {

    const [movieId] = useState(match.params.id);
    const [movieInfo, setMovieInfo] = useState([]);
    const [movieCast, setMovieCast] = useState([]);

    

    useEffect(() => {
        getMovieDetail();
        getMovieCast();

        console.log(movieCast)
    }, [movieId])
    

    const key = 'ae56d5e33eecc34a48f563c98dd330ad';

    const getMovieDetail = async () => {
        const fetchMovieDetail =  await fetch (`https://api.themoviedb.org/3/movie/${match.params.id}?api_key=${key}&language=en-US`)
        setMovieInfo(await fetchMovieDetail.json());
        
    }

    const getMovieCast = async () => {
        const fetchMovieCast = await fetch (`https://api.themoviedb.org/3/movie/${match.params.id}/credits?api_key=${key}`)
        const {cast} = await fetchMovieCast.json()
        setMovieCast(cast);
    }

    
    console.log(movieCast)

    

    return (
        <MovieWrapper>
            <BasicInfo>
            <div><img src={ movieInfo.poster_path === null ? noPosterImg : `https://image.tmdb.org/t/p/w342/${movieInfo.poster_path}`} alt={movieInfo.title}></img></div>
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

export default MovieDetail



