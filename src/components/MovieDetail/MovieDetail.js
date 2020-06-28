import React, { Component } from "react";

import { Link } from "react-router-dom";
import noPosterImg from "../../assets/no-poster.png";
import { movieDetailApi } from "../../apiCall";
import { movieCastApi } from "../../apiCall";
import {
  MovieWrapper,
  List,
  Cast,
  BasicInfo,
  Button,
  Overview,
  Title,
  Rating,
  Actor,
  AddToList,
} from "./MovieDetailStyle";
import WishListIcon from "../WishList/WishListIcon/WishListIcon";

class MovieDetail extends Component {
  constructor() {
    super();

    this.state = {
      movieId: '',
      movieInfo: {},
      movieCast: [],
      inWishList: null,
    }
  }

  componentDidMount () {
    const movieId = this.props.match.params.id

    if (!movieId) {
      return;
    }

    this.setState({ movieId });

    const checkWishList = (title) => sessionStorage.getItem(title);

    movieDetailApi(movieId).then(details => {
      this.setState({ movieInfo: details });
      this.setState({ inWishList: checkWishList(details.title) });
    });
    movieCastApi(movieId).then(data => this.setState({ movieCast: data.cast }));
  }

  render () {
    const saveToWishList = () => {
      if ( this.state.inWishList === true) {
        this.setState({ inWishList: false });
        return sessionStorage.removeItem(this.state.movieInfo.title);
      }
      this.setState({ inWishList: true });
      return sessionStorage.setItem(this.state.movieInfo.title, JSON.stringify(this.state.movieInfo));
    }

    const checkForPoster =
      this.state.movieInfo.poster_path === null
        ? noPosterImg
        : `https://image.tmdb.org/t/p/w342/${this.state.movieInfo.poster_path}`;


    return (
      <MovieWrapper>
        <WishListIcon></WishListIcon>
        <BasicInfo>
          <div>
            <img src={checkForPoster} alt={this.state.movieInfo.title}></img>
          </div>
          <div>
            <Title>{this.state.movieInfo.title}</Title>
            <Rating>Rating {this.state.movieInfo.vote_average}</Rating>
            <Overview>{this.state.movieInfo.overview}</Overview>
            <AddToList onClick={saveToWishList}>{this.state.inWishList ? 'Remove from watchlist' : 'Add to watchlist'}</AddToList>
            <Link to="/">
              <Button>Go Back</Button>
            </Link>
          </div>
        </BasicInfo>
        <Cast>
          <h2>Cast:</h2>
          <List>
            {this.state.movieCast.map((actor, i) => (
              <Actor key={i}>
                <p>Character: {actor.character}</p>
                <p>Actor: {actor.name}</p>
              </Actor>
            ))}
          </List>
        </Cast>
      </MovieWrapper>
    );
  }
}

export default MovieDetail
