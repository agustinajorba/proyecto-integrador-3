import React from "react";
import { Component } from "react";
import './style.css'


let PeliculasCarteleraURL = 'https://api.themoviedb.org/3/movie/popular?api_key=15879dad47bfb7f22061a18ffdf1b790'

class PeliculasCartelera extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PelisCartelera: [],
        }
    }
    componentDidMount() {
        fetch(PeliculasCarteleraURL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({ PelisCartelera: data.results });
            }).catch()
    }

    render() {
        return (
            <>
                <h1>Peliculas en Cartelera:</h1>
                <ul>
                    {this.state.PelisCartelera.map((pelicula, i) => {
                        console.log(pelicula);

                        if (i < 5) { 
                            return (
                                <li className="PeliculaCaja">
                                    <img src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`}></img>
                                    <h1>{pelicula.title}</h1>
                                    <p>{pelicula.overview}</p>
                                </li>
                            )
                        }
                    })}
                </ul >
            </>
        )
    }
}

export default PeliculasCartelera;