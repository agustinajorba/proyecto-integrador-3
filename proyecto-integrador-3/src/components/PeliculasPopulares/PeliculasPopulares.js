import React from "react";
import { Component } from "react";
import './style.css'
import CardPeliculas from "../CardPeliculas/CardPeliculas";


let PeliculasPopularesURL = 'https://api.themoviedb.org/3/movie/popular?api_key=15879dad47bfb7f22061a18ffdf1b790'

class PeliculasPopulares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PelisPopulares: [],
        }
    }
    componentDidMount() {
        fetch(PeliculasPopularesURL)
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                this.setState({ PelisPopulares: data.results.slice(0,5) });
            }).catch()
    }

    render() {
        return (
            <>
                <h1>Peliculas Populares:</h1>
                <ul>
                    {this.state.PelisPopulares.map((pelicula) => {
                        return <CardPeliculas key={pelicula.id} data={pelicula} />

                        
                    })}
                </ul >
            </>
        )
    }
}

export default PeliculasPopulares;