import React from "react";
import { Component } from "react";
import './style.css'
import CardPeliculas from "../CardPeliculas/CardPeliculas";

let PeliculasCarteleraURL = 'https://api.themoviedb.org/3/movie/popular?api_key=15879dad47bfb7f22061a18ffdf1b790'

class PeliculasCartelera extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PelisCartelera: [],
            descripcion: false,
        }
    }
    componentDidMount() {
        fetch(PeliculasCarteleraURL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({ PelisCartelera: data.results.slice(5) });
            }).catch()
    }
    descripcion() {
        this.setState({
            descripcion: !this.state.verDescripcion
        })

    }

    render() {
        return (
            <>
                <h1>Peliculas en Cartelera:</h1>
                <ul>
                    {this.state.PelisCartelera.map((pelicula, i) => {
                        return <CardPeliculas data={pelicula} />
                        // if (i < 5) {
                        //     return (

                        //         <li className="PeliculaCaja">
                        //             <img src={`https://image.tmdb.org/t/p/w200${pelicula.poster_path}`}></img>
                        //             <h1>{pelicula.title}</h1>
                        //             <button onClick={() => this.descripcion()}>
                        //                 {this.state.descripcion ? "Ocultar Descripción" : "Ver Descripción"}
                        //             </button>
                        //             {this.state.descripcion && (
                        //                 <p>{pelicula.overview}</p>
                        //             )}
                        //         </li>



                        //     )
                        // }
                    })}
                </ul >
            </>
        )
    }
}

export default PeliculasCartelera;