import React from "react";
import { Component } from "react";
import './style.css'
import CardPeliculas from "../../components/CardPeliculas/CardPeliculas";
import FlitroPeliculas from "../../components/FiltroPeliculas/FiltroPeliculas";

let api_key = '15879dad47bfb7f22061a18ffdf1b790' ;

class Populares extends Component {
    constructor(props) {
        super(props)
        this.state = {
            PelisPopulares: [],
            page:1,
            PelisFiltradas:[]
        }
    }
    componentDidMount() {
        this.cargarPeliculas () 
        
    }
    
    cargarPeliculas(){
        let PeliculasPopularesURL = `https://api.themoviedb.org/3/movie/popular?api_key=${api_key}&page=${this.state.page}`
        fetch(PeliculasPopularesURL)
        .then((res) => res.json())
        .then((data) => {
            const pelisActuales = this.state.PelisPopulares
            const nuevasPelis = data.results
            const nuevaLista = pelisActuales.concat(nuevasPelis)

            this.setState({
                PelisPopulares: nuevaLista,
                page: this.state.page +1,
                PelisFiltradas: data.results
            })
        }).catch()
    }
    filtrarPeliculas(inputUsuario){
        const peliculasFiltradas = this.state.PelisFiltradas.filter((elm) => elm.title.toLowerCase().includes(inputUsuario.toLowerCase()))
        this.setState({PelisPopulares: peliculasFiltradas})

    }
    

    render() {
        return (
            <>
                <h1 className="tituloPopu">Peliculas Populares:</h1>
                <FlitroPeliculas filtro={(busqueda) => this.filtrarPeliculas(busqueda)}/>
                <div className="containerPopu">
                    {this.state.PelisPopulares.map((pelicula) => {
                        return <CardPeliculas key={pelicula.id} data={pelicula} />
                    })}
                </div >
                <div className="boton-vermas">
                <button onClick={() => this.cargarPeliculas()}> Cargar más</button>
                </div>
            </>
        )
    }
}

export default Populares;