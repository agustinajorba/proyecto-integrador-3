import React from "react";
import { Component } from "react";
import './style.css'
import CardPeliculas from "../../components/CardPeliculas/CardPeliculas";
import FiltroPeliculas from "../../components/FiltroPeliculas/FiltroPeliculas";

let api_key = '15879dad47bfb7f22061a18ffdf1b790';

class Populares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PelisPopulares: [],
            page: 1,
            PelisFiltradas: [],
            cargar: true
        }
    }
    componentDidMount() {
        this.cargarPeliculas()

    }

    cargarPeliculas() {
        let PeliculasPopularesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${this.state.page}`
        fetch(PeliculasPopularesURL)
            .then((res) => res.json())
            .then((data) => {
                const pelisActuales = this.state.PelisPopulares
                const nuevasPelis = data.results
                const nuevaLista = pelisActuales.concat(nuevasPelis)

                this.setState({
                    PelisPopulares: nuevaLista,
                    page: this.state.page + 1,
                    PelisFiltradas: data.results,
                    cargar: false
                })
            })
            .catch()

    }
    filtrarPeliculas(inputUsuario) {
        const peliculasFiltradas = this.state.PelisFiltradas.filter((elm) => elm.title.toLowerCase().includes(inputUsuario.toLowerCase()))
        this.setState({ PelisPopulares: peliculasFiltradas })

    }


    render() {
        const cargando = this.state.cargar;
        return (
            <div>
                {cargando ? (
                    <p className='errorDetail'>Cargando...</p>
                ) : (
                    <>
                        <h1 className="tituloPopu">Peliculas Populares</h1>
                        <div className="buscadorPopu">
                            <FiltroPeliculas filtro={(busqueda) => this.filtrarPeliculas(busqueda)} />
                        </div>
                        <div className="containerPopu">
                            {this.state.PelisPopulares.map((pelicula) => {
                                return <CardPeliculas key={pelicula.id} data={pelicula} />;
                            })}
                        </div>
                        <div className="cargarMas">
                            <button onClick={() => this.cargarPeliculas()}> Cargar más</button>
                        </div>
                    </>
                )}
            </div>
        )
    }
}

export default Populares;