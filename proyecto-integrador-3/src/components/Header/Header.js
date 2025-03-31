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
            name:'Películas',
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
            <h1 className="logo">StarCommerce</h1> 
            <OpcionesMenu opciones= {opciones}/>
            </div>
            
        </header>

    )
}
export default Header;