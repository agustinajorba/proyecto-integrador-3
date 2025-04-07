import React, { Component } from 'react'

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
                <img src={`https://image.tmdb.org/t/p/w200${this.state.dataPelicula.poster_path}`}></img>
                <h1>{this.state.dataPelicula.title}</h1>
               
                <button onClick={() => this.descripcion()}>
                    {this.state.verDescripcion ? "Ocultar Descripción" : "Ver Descripción"}
                </button>
               
                {this.state.verDescripcion && (
                    <p>{this.state.dataPelicula.overview}</p>
                )}
            </li>


        )
    }
}
