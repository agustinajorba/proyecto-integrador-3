import React from "react";
import { Component } from "react";
import './style.css'
import CardPeliculas from "../../components/CardPeliculas/CardPeliculas";
import FlitroPeliculas from "../../components/FiltroPeliculas/FiltroPeliculas";

let api_key = '15879dad47bfb7f22061a18ffdf1b790';


class Cartelera extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PelisCartelera: [],
            page: 1,
            PelisFiltradas:[],
            

        };
    }


    componentDidMount() {
        this.cargarPeliculas()

    }

    cargarPeliculas() {
        let PeliculasCarteleraURL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${api_key}&page=${this.state.page}`
        fetch(PeliculasCarteleraURL)
            .then((res) => res.json())
            .then((data) => {
                const pelisActuales = this.state.PelisCartelera
                const nuevasPelis = data.results
                const nuevaLista = pelisActuales.concat(nuevasPelis)

                this.setState({
                    PelisCartelera: nuevaLista,
                    page: this.state.page + 1,
                    PelisFiltradas: data.results
                })
            }).catch()
    }

    filtrarPeliculas(inputUsuario){
        const peliculasFiltradas = this.state.PelisFiltradas.filter((elm) => elm.title.toLowerCase().includes(inputUsuario.toLowerCase()))
        this.setState({PelisCartelera: peliculasFiltradas})

    }




    render() {

        return (
            <>
                <h1 className="tituloPopu">Peliculas en Cartelera:</h1>
                <FlitroPeliculas filtro={(busqueda) => this.filtrarPeliculas(busqueda)}/>
                <ul className="peliculasCart">
                    {this.state.PelisCartelera.map((pelicula) => {
                        return <CardPeliculas key={pelicula.id} data={pelicula} />

                    })}
                </ul >
                <div className="boton-vermas">
                    <button onClick={() => this.cargarPeliculas()}> Cargar más</button>
                </div>

            </>
        )
    }
}

export default Cartelera;