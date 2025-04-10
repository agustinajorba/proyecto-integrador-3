import React, { Component } from 'react'

export default class PeliculaDetalle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pelicula: {}
    }
  } 
  componentDidMount() {
    const idPelicula = this.props.match.params.id;

    fetch(`https://api.themoviedb.org/3/movie/${idPelicula}?api_key=15879dad47bfb7f22061a18ffdf1b790`)
    .then((response) => response.json())
    .then((data) => {console.log(data);
     this.setState({ pelicula: data });})
    .catch((error) => {console.log('El error fue: ' + error);})
  }

  render() {
    return (
     
      <>
        <h1>Detalle:</h1>

        <section>
          <h2> Nombre:{this.state.pelicula.title}</h2>
          <img src={`https://image.tmdb.org/t/p/w500/${this.state.pelicula.poster_path}`}></img>
          <p>Rating:  Visto por {this.state.pelicula.popularity} Personas, Con una valoracion de {this.state.pelicula.vote_average} / 10</p> 
          <p>Estreno: {this.state.pelicula.release_date}</p>
          <p>Duracion: {this.state.pelicula.runtime}</p>
          <p>Sinopsis: {this.state.pelicula.overview}</p>
          <p></p>

        </section>
      
      </>
     //Hay que revisar el popularity porque no es el rating pero nose que datos seria de los que te trae
     
    )
  }
}
