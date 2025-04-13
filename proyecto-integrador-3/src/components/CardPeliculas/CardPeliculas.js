import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './style.css'

export default class CardPeliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataPelicula: props.data,
            verDescripcion: false,
            favorito: false

        }
    }

    descripcion() {
        this.setState({
            verDescripcion: !this.state.verDescripcion
        })

    }

    componentDidMount() {
        this.chequearFavoritos();

    }

    chequearFavoritos() {
        let favoritos = localStorage.getItem('fav')
        if (favoritos !== null) {
            let favsParseados = JSON.parse(favoritos);
            let estaMiId = favsParseados.includes(this.state.dataPelicula.id);
            if (estaMiId) {
                this.setState({ favorito: true });
            }
        }
    }

    agregarFavoritos(id) {
        let favoritos = localStorage.getItem('fav')
        if (favoritos !== null) {
            let arrParseado = JSON.parse(favoritos)
            arrParseado.push(id);
            localStorage.setItem('fav', JSON.stringify(arrParseado));
        } else {
            let primerID = [id]
            let arrStringificado = JSON.stringify(primerID)
            localStorage.setItem('fav', arrStringificado)
        }

        this.setState({
            favorito: true
        })
    }

    sacarFavoritos(id) {
        let favoritos = localStorage.getItem('fav')
        let favsParseados = JSON.parse(favoritos);
        let filtrarFavs = favsParseados.filter((elm) => elm !== id)
        const favsStringificado = JSON.stringify(filtrarFavs)
        localStorage.setItem('fav', favsStringificado)
        this.setState({
            favorito: false
        })
    }

    render() {
        const movies = this.state.dataPelicula;

        console.log('props peli', this.props)
        return (


            <div className="containerCard">
                <img src={`https://image.tmdb.org/t/p/w200${this.state.dataPelicula.poster_path}`} alt={this.state.dataPelicula.title}></img>
                <h1 className='tituloCard'>{this.state.dataPelicula.title}</h1>
                <div>
                    <div className='verDesc'>
                    <button onClick={() => this.descripcion()}>
                        {this.state.verDescripcion ? "Ocultar Descripción" : "Ver Descripción"}
                    </button>
                    </div>

                    {this.state.verDescripcion && (
                        <p className='descr'>{this.state.dataPelicula.overview}</p>
                    )}
                </div>
                <div className='botonesHome'>
                    <Link to={`/detalle/${this.state.dataPelicula.id}`}>
                        <button className="btn"> Ir al detalle </button>
                    </Link>
                    {
                        this.state.favorito ?
                            <button className='botonFavoritosCard' onClick={() => this.sacarFavoritos(movies.id)}>Sacar de Favoritos</button>
                            :
                            <button className='botonFavoritosCard' onClick={() => this.agregarFavoritos(movies.id)}>Agregar a Favoritos</button>
                    }
                </div>
            </div>


        )
    }
}
