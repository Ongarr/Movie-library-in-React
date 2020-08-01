import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import { movieDetailApi } from '../../api/MovieDbApi';
import { movieCastApi } from '../../api/MovieDbApi';
import MovieTilePoster from '../MovieTile/MovieTilePoster/MovieTilePoster';
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
  BasicInfoWrapper,
} from './MovieDetailStyle';

class MovieDetail extends Component {
  constructor() {
    super();

    this.state = {
      movieId: '',
      movieInfo: {},
      movieCast: [],
      inWishList: null,
      loading: false,
    };
  }

  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.setState({ loading: true });
    if (!movieId) {
      return;
    }

    this.setState({ movieId });

    const checkWishList = (title) => sessionStorage.getItem(title);

    this.setState({ loading: true });
    Promise.all([movieDetailApi(movieId), movieCastApi(movieId)])
      .then(([details, cast]) => {
        this.setState({ movieInfo: details });
        this.setState({ inWishList: checkWishList(details.title) });
        this.setState({ movieCast: cast.cast });
        this.setState({ loading: false });
      })
      .then(() => {});
  }

  render() {
    const saveToWishList = () => {
      if (this.state.inWishList === true) {
        this.setState({ inWishList: false });
        return sessionStorage.removeItem(this.state.movieInfo.title);
      }
      this.setState({ inWishList: true });
      return sessionStorage.setItem(
        this.state.movieInfo.title,
        JSON.stringify(this.state.movieInfo),
      );
    };

    return (
      <MovieWrapper>
        {this.state.loading ? (
          <h1>Loading</h1>
        ) : (
          <div>
            <BasicInfoWrapper>
              <BasicInfo>
                <MovieTilePoster
                  movie={this.state.movieInfo}
                  size="342"
                ></MovieTilePoster>
                <div>
                  <Title>{this.state.movieInfo.title}</Title>
                  <Rating>
                    Rating {this.state.movieInfo.vote_average}
                  </Rating>
                  <Overview>{this.state.movieInfo.overview}</Overview>
                  <AddToList onClick={saveToWishList}>
                    {this.state.inWishList
                      ? 'Remove from watchlist'
                      : 'Add to watchlist'}
                  </AddToList>
                  <Link to="/">
                    <Button>Go Back</Button>
                  </Link>
                </div>
              </BasicInfo>
            </BasicInfoWrapper>
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
          </div>
        )}
      </MovieWrapper>
    );
  }
}

export default MovieDetail;
