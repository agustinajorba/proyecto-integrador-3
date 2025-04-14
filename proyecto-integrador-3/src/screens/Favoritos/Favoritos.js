import React, { Component } from "react";
import CardPeliculas from "../../components/CardPeliculas/CardPeliculas";
import './style.css'

let api_key = '15879dad47bfb7f22061a18ffdf1b790';

export default class Favoritos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            peliculasFavoritas: [],
            hayFavoritos: false,
            cargar: true
        }
    }

    componentDidMount() {
        const storageFavoritos = localStorage.getItem('fav')
        if (storageFavoritos !== null) {
            let favParseado = JSON.parse(storageFavoritos)
            if (favParseado.length > 0) {
                Promise.all(
                    favParseado.map((id) =>
                        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${api_key}`)
                            .then(resp => resp.json())
                            .catch(e => console.log(e))
                    )
                )
                    .then((data) => this.setState({
                        peliculasFavoritas: data,
                        hayFavoritos: true,
                        cargar: false
                    }))
                    .catch(e => console.log(e));
            }
        }
    }
    filtrarFavoritos(id) {
        const filtradas = this.state.peliculasFavoritas.filter(pelicula => pelicula.id !== id);
        let storageFavoritos = localStorage.getItem('fav')
        if (localStorage !== null) {
            let favParseado = JSON.parse(storageFavoritos);
            let favActualizado = favParseado.filter(favId => favId !== id);
            localStorage.setItem('fav', JSON.stringify(favActualizado))
        }
        this.setState({
            peliculasFavoritas: filtradas,
            hayFavoritos: filtradas.length > 0
        });
    }

    render() {
        const cargando = this.state.cargar;
        return (
            <div>
                {cargando ? (
                    <p className='errorDetail'>Cargando...</p>
                ) : (
                    <>
                        <h1 className="tituloPopu">Peliculas Favoritas</h1>
                        <div className="containerPopu">
                            {
                                this.state.peliculasFavoritas.length > 0
                                    ?
                                    this.state.peliculasFavoritas.map((elm, idx) =>
                                        <CardPeliculas
                                            data={elm}
                                            key={idx + elm.name}
                                            borrarDeCarrito={(id) => this.filtrarFavoritos(id)}
                                        />)
                                    :
                                    this.state.hayFavoritos === false && (
                                        <p className="favVacio">No hay películas en Favoritos</p>)
                            }
                        </div>
                    </>
                )
                }
            </div>
        )
    }
}
