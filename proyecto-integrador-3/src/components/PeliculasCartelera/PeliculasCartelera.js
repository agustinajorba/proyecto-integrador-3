import React from "react";
import { Component } from "react";
import './style.css'
import CardPeliculas from "../CardPeliculas/CardPeliculas";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

let PeliculasCarteleraURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=15879dad47bfb7f22061a18ffdf1b790'

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
                this.setState({ PelisCartelera: data.results.slice(5, 10) });
            }).catch()
    }


    render() {
        return (
            <>
                <h1 className="tituloHome">🎥  Peliculas en Cartelera:</h1>
                <div className="cartelera">
                    {this.state.PelisCartelera.map((pelicula) => {
                        return <CardPeliculas key={pelicula.id} data={pelicula} />

                    })}
                </div >
                <div className="containerBotonCart">
                    <div className="verTodasCart">
                    <Link to={'/cartelera'}>
                        Ver todas
                    </Link>
                    </div>
                </div >
            
                
            </>
        )
    }
}

export default PeliculasCartelera;