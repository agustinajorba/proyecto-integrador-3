import React, { Component } from "react";
let PeliculasPopularesURL = 'https://api.themoviedb.org/3/movie/popular?api_key=15879dad47bfb7f22061a18ffdf1b790'

class Home extends Component {
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
                this.setState({ PelisPopulares: data.results });
            }).catch()
    }

    render() {
        return (
            <>
                <h1>Peliculas Populares:</h1>
                <ul>
                    {this.state.PelisPopulares.map((pelicula, i) => {
                        console.log(pelicula);

                        if (i < 5) { 
                            return (
                                <li>
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


export default Home