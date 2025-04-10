import React, { Component } from 'react'

export default class PeliculaDetalle extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      pelicula: {}
    }
  } 
  componentDidMount() {
    let idPelicula = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/movie/${idPelicula}?api_key=15879dad47bfb7f22061a18ffdf1b790`)
    .then((response) => response.json())
    .then((data) => {console.log(data);
     this.setState({ pelicula: data });})
    .catch((error) => {console.log('El error fue: ' + error);})
  }

  render() {
    const movies = this.state.pelicula;
    
    return (
     
      <div>
        {!movies.title ? (
          <p>No se encontró ninguna película con ese ID.</p>
        ) : (
          <section>
            <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt={movies.title} />
            <h1>{movies.title}</h1>
            <p>Calificación: {movies.vote_average} </p>
            <p>Fecha de Estreno: {movies.release_date}</p>
            <p>Duración: {movies.runtime} minutos</p>
            <p>Sinopsis: {movies.overview}</p>
            <p>Género/s: {movies.genres.map(genero => genero.name).join(', ')}</p>
          </section>
        )}
      </div>
    );
  }
}

