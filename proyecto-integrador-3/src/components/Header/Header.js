import React from "react";
import OpcionesMenu from "./OpcionesMenu";
import './style.css'


function Header() {
    let opciones = [
        {
            name:'HOME',
            path: '/'
        },
        {
            name:'FAVORITOS',
            path: '/favoritos'
        },
        {
            name:'POPULARES',
            path: '/populares'
        },
        {
            name:'CARTELERA',
            path: '/cartelera'
        }
    ]
    return (
        <header>
            <h1 className="logo">🎥  MovieStar</h1> 
            <div className = "barra-navegacion">
            <OpcionesMenu opciones= {opciones}/>
            
            </div>
            
        </header>

    )
}
export default Header;