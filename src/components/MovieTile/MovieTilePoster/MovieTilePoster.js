import React, {useState} from 'react';
import styled from 'styled-components';
import noPosterImg from '../../../assets/no-poster.png';

const Img = styled.img `
    width: 185px;
    min-height: ${(props) => props.forStyle ? '0px' : '278px'};;
    max-height: 278px;
`
const Loader = styled.div `
color: #000;
background: #000;
    &::after {
    background: #000;
    }
    
    &::before {
    background: #000;  
    }
`



const MovieTilePoster = ({oneMovie}) => {

    const [Loading, setLoading] = useState(true);


    return (
        <div>
        
        {/* {IsLoading ? <div className="loader">Loading...</div> : <Img src={ PosterUrl } onLoad={setPosterUrl(noPosterImg)}alt={oneMovie.title}/>} */}
        {Loading ? <Loader className="loader">Loading...</Loader> : null }
        <Img src={ oneMovie.poster_path === null ? noPosterImg : `https://image.tmdb.org/t/p/w185${oneMovie.poster_path}` } forStyle={Loading} onLoad={() => setLoading(false)} alt={oneMovie.title}/>
        </div>



    )
}

export default MovieTilePoster;
