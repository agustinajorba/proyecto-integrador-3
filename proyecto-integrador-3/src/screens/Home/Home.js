import React from "react";
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares";
import PeliculasCartelera from "../../components/PeliculasCartelera/PeliculasCartelera";
import './style.css'


function Home(){
    return(
        
        <div className="home">

        
        <React.Fragment >
            <PeliculasPopulares/>
            <PeliculasCartelera/>

        </React.Fragment>
        </div>
    )
}
export default Home;