import React from "react";
import OpcionesMenu from "./OpcionesMenu";
import Busqueda from "../Busqueda/Busqueda";
import './style.css'


function Header() {
    let opciones = [
        {
            name:'Home',
            path: '/'
        },
        {
            name:'Favoritos',
            path: '/favoritos'
        },
        {
            name:'Peliculas',
            path: '/peliculas'
        },
        {
            name:'Series',
            path: '/series'
        }
    ]
    return (
        <header>
            <div className = "barra-navegacion">
            <h1 className="logo">MovieStar</h1> 
            <OpcionesMenu opciones= {opciones}/>
            <Busqueda />

            </div>
            
        </header>

    )
}
export default Header;