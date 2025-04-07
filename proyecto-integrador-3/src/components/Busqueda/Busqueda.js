import React from "react";


function Busqueda() {
    return (
        <div className="DivInput">
            <form action='/peliculas'> 
                <input className="input" type="search" name="busqueda" placeholder="Buscar Peliculas..." />
            </form>


        </div>
    );
}
export default Busqueda;