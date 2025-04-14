import React from "react";
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares";
import PeliculasCartelera from "../../components/PeliculasCartelera/PeliculasCartelera";
import Buscador from "../../components/Buscador/Buscador";
import './style.css'


function Home(props) {
    return (

        <div className="home">
            <Buscador history={props.history} />

            <React.Fragment >
                <PeliculasPopulares />
                <PeliculasCartelera />

            </React.Fragment>
        </div>
    )
}
export default Home;