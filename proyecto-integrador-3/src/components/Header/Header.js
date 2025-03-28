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
            name:'Ver todas',
            path: '/vertodas'
        },
        
    ]
    return (
        <header>
            <h1>Nombre de la aplicacion</h1>
            <img src='./img/logo.jpg' alt='' />
            <OpcionesMenu opciones= {opciones}/>
        </header>

    )
}
export default Header;