import React, { Component } from 'react'
import './style.css'

export default class PeliculaDetalle extends Component {
  constructor(props) {
    console.log(props)
    super(props);
    this.state = {
      pelicula: {},
      favorito: false
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

  chequearFavoritos (){
    let favoritos = localStorage.getItem('fav')
    if (favoritos !== null) {
      let favsParseados = JSON.parse(favoritos);
      let estaMiId = favsParseados.includes(this.state.pelicula.id);
      if (estaMiId) {
        this.setState({ favorito: true });
      }
    }
  }

  agregarFavoritos (id){
    let favoritos = localStorage.getItem('fav')
    if (favoritos !== null) {
      let arrParseado = JSON.parse(favoritos)
      arrParseado.push(id);
      localStorage.setItem('fav', JSON.stringify(arrParseado));
    } else{
      let primerID = [id]
      let arrStringificado = JSON.stringify(primerID)
        localStorage.setItem('fav', arrStringificado)
    }

    this.setState({
      favorito: true
    })
  }

  sacarFavoritos(id){
    let favoritos = localStorage.getItem('fav')
    let favsParseados = JSON.parse(favoritos);
    let filtrarFavs = favsParseados.filter((elm) => elm !== id )
    const favsStringificado = JSON.stringify(filtrarFavs)
      localStorage.setItem('fav', favsStringificado)
      this.setState({
        favorito: false
      })
  }

  render() {
    const movies = this.state.pelicula;
    
    return (
     
      <div className='errorDetail'>
        {!movies.title ? (
          <p>No se encontró ninguna película con ese ID.</p>
        ) : (
          <section className='containerDetail'>
            <div className='text-detalle'>
            <h1>{movies.title}</h1>
            <p>Calificación: {movies.vote_average} </p>
            <p>Fecha de Estreno: {movies.release_date}</p>
            <p>Duración: {movies.runtime} minutos</p>
            <p>Sinopsis: {movies.overview}</p>
            <p>Género/s: {movies.genres.map(genero => genero.name).join(', ')}</p>
            {
          this.state.favorito ?
          <button onClick={()=> this.sacarFavoritos(movies.id) }>Sacar del carrito</button>
          :
          <button onClick={() => this.agregarFavoritos(movies.id)}>Agregar al carrito</button>
        }
            </div>
            <img src={`https://image.tmdb.org/t/p/w500/${movies.poster_path}`} alt={movies.title} className='foto-detail'/>
          </section>
        )}
      </div>
    );
  }
}

