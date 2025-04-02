import React from "react";
import OpcionesMenu from "./OpcionesMenu";
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
            name:'Populares',
            path: '/peliculas'
        },
        {
            name:'Cartelera',
            path: '/series'
        }
    ]
    return (
        <header>
            <div className = "barra-navegacion">
            <h1 className="logo">MovieStar</h1> 
            <OpcionesMenu opciones= {opciones}/>
            </div>
            
        </header>

    )
}
export default Header;