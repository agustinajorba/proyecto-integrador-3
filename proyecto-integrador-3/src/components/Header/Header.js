import React from "react";
import OpcionesMenu from "./OpcionesMenu";
import Busqueda from "../Busqueda/Busqueda";
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
            <div className = "barra-navegacion">
            <h1 className="logo">MovieStar</h1> 
            <OpcionesMenu opciones= {opciones}/>
            <Busqueda />

            </div>
            
        </header>

    )
}
export default Header;