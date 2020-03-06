import React from 'react';

const movieTile = (props) => {
    return (
        <div className="movie-tile">
            <img src={ props.imgpath } alt={props.title}></img>
            <div className="title">
            <p>{props.title}</p>
            </div>
        </div>
    )
}

export default movieTile;