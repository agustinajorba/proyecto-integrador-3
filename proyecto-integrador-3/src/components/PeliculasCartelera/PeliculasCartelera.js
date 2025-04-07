import React from "react";
import { Component } from "react";
import './style.css'
import CardPeliculas from "../CardPeliculas/CardPeliculas";

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
                this.setState({ PelisCartelera: data.results.slice(5,10) });
            }).catch()
    }
   

    render() {
        return (
            <>
                <h1>Peliculas en Cartelera:</h1>
                <ul>
                    {this.state.PelisCartelera.map((pelicula) => {
                        return <CardPeliculas key= {pelicula.id} data={pelicula} />
                       
                    })}
                </ul >
            </>
        )
    }
}

export default PeliculasCartelera;