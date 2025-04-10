import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class CardPeliculas extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataPelicula: props.data,
            verDescripcion: false,

        }
    }
    
    descripcion() {
        this.setState({
            verDescripcion: !this.state.verDescripcion
        })

    }
    render() {
        console.log('props peli', this.props)
        return (


            <li className="PeliculaCaja">
                <img src={`https://image.tmdb.org/t/p/w200${this.state.dataPelicula.poster_path}`} alt={this.state.dataPelicula.title}></img>
                <h1>{this.state.dataPelicula.title}</h1>
                <>
                    <button onClick={() => this.descripcion()}>
                        {this.state.verDescripcion ? "Ocultar Descripción" : "Ver Descripción"}
                    </button>

                    <Link to={`/PeliculaDetalle/${this.state.dataPelicula.id}`}>
                        <button className="btn"> Ir al detalle </button>
                    </Link>
                </>

                {this.state.verDescripcion && (
                    <p>{this.state.dataPelicula.overview}</p>
                )}
            </li>


        )
    }
}
