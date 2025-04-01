import React from "react";
import SeccionPeli from "../../components/SeccionPeli/SeccionPeli";
import './style.css'


function Home(){
    return (
        <React.Fragment>
            <form className="buscador">
                <input type="text" placeholder="Buscar películas..." />
            </form>

            <div className="GrupoPeliculas">
                <div className="PeliculasPopulares">
                    <h2>Películas más populares</h2>
                </div>
                <ul className="peliculas">
                    <SeccionPeli/>
                </ul>
            </div>
            <div className="GrupoPeliculas">
                <div className="PeliculasCartelera">
                    <h2>Películas en cartelera</h2>
                </div>
                <ul className="peliculas">
                    <li className="pelicula">Peli cartelera 1</li>
                    <li className="pelicula">Peli cartelera 2</li>
                    <li className="pelicula">Peli cartelera 3</li>
                    <li className="pelicula"> Peli cartelera 4</li>
                </ul>
            </div>

            
        </React.Fragment> 
        
      );
}
export default Home;