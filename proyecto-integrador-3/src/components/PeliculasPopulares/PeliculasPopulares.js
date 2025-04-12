import React from "react";
import { Component } from "react";
import './style.css'
import CardPeliculas from "../CardPeliculas/CardPeliculas";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


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
                this.setState({ PelisPopulares: data.results.slice(0, 5) });
            }).catch()
    }

    render() {
        return (
            <>
                <h1 className="tituloHome">🎥  Películas Populares</h1>
                <div className="populares">
                    {this.state.PelisPopulares.map((pelicula) => {
                        return <CardPeliculas key={pelicula.id} data={pelicula} />


                    })}
                </div>
                <div className="containerBoton">
                <div className="verTodas">
                    <Link to={'/populares'}>
                        Ver todas
                    </Link>
                </div >
                </div>
            </>
        )
    }
}

export default PeliculasPopulares;