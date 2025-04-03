import React from "react";
import PeliculasPopulares from "../../components/PeliculasPopulares/PeliculasPopulares";
import PeliculasCartelera from "../../components/PeliculasCartelera/PeliculasCartelera";


function Home(){
    return(
        <React.Fragment>
            <PeliculasPopulares/>
            <PeliculasCartelera/>

        </React.Fragment>
    )
}
export default Home;