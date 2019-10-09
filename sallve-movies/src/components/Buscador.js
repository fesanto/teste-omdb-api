import React from 'react';
import './Buscador.css'

// import { Container } from './styles';

class Buscador extends React.Component {

  constructor() {
    super()
    this.state = {
      keyword: '',
      movies: []
    }
  }

  keywordChanged = event =>
    this.setState({ keyword: event.target.value })

  searchMovie = () =>
    fetch(`http://www.omdbapi.com/?apikey=4a9b7f19&s=${this.state.keyword}`)
      .then(response => response.json())
      .then(this.renderMovies)
  // console.log(this.state.keyword)

  renderMovies = (response) =>
    this.setState({
      movies: response.Search
    })

  render() {
    return (
      <div className="buscador">
        <h1>Sallve Movies</h1>
        <div id="main">
          <input id="search" type="text"
            placeholder="find a movie"
            value={this.state.keyword}
            onChange={this.keywordChanged}
          ></input>


          <input id="btn" type="button"
            value="Search"
            onClick={this.searchMovie} />
        </div>
        <div id="container">
          <ul>
            {
              this.state.movies.map(
                (movie) =>
                  <li>
                    <div id="box">
                      <h2 key={movie.imdbID}>{movie.Title}</h2>
                      <h3>{movie.Released} Released - Genre {movie.Genre}</h3>
                      <div id="movies">
                        <img src={movie.Poster} alt="" />
                        <div id="movies-details">
                          <p>Plot: {movie.Title}</p>
                          <p>Actors: {movie.Type}</p>
                          <p>Director: {movie.Year}</p>
                          <p>Writer: {movie.imdbID}</p>
                        </div>
                      </div>
                    </div>
                  </li>)
            }
          </ul>
        </div>
      </div>
    )
  }
}
export default Buscador;