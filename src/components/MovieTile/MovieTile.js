import React from 'react';
import styled from 'styled-components'

const MovieList = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr) ) ;
  justify-items: center;
  padding: 50px 20px;
  grid-row-gap: 10px;
  grid-column-gap: 10px;
  background: transparent;
`

const Tile = styled.div`
    width: 185px;
    display: flex;
    flex-direction: column;
    background-color: lightgoldenrodyellow;
`

const Img = styled.img `
    width: 185px;
    min-height: 278px;
    max-height: 278px;
`

const Title = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const P = styled.p `
    font-size: 16px;
    font-weight:bold;
    padding: 5px 10px;
`

const movieTile = ( {movies} ) => {
    return (
        <MovieList>
        
            { movies === false ? null :
            movies.map((movie) => 
            <Tile className="movie-tile" key={movie.id}>
                <Img src={ movie.poster_path === null ? 'https://via.placeholder.com/185x278?text=No+poster' :`https://image.tmdb.org/t/p/w185/${movie.poster_path}` } alt={movie.title}></Img>
                <Title>
                <P>{movie.title}</P>
                </Title>
            </Tile>
            )
            }
        </MovieList>
    )
}

export default movieTile;