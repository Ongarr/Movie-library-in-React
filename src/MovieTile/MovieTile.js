import React from 'react';
import styled from 'styled-components'

const Tile = styled.div`
    width: 185px;
    display: flex;
    flex-direction: column;
    background-color: lightgoldenrodyellow;
`

const Img = styled.img `
    width: 185px;
    min-height: 278px;
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

const movieTile = (props) => {
    return (
        <Tile className="movie-tile">
            <Img src={ props.imgpath } alt={props.title}></Img>
            <Title>
            <P>{props.title}</P>
            </Title>
        </Tile>
    )
}

export default movieTile;