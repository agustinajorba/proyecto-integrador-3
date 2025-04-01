import React from "react";
import Ficha from './Peli'

function SeccionPeli(){
    const PeliData = [
        {
            id:1,
            titulo: 'Pelicula N1',
            foto: "",
            descrip: 'lorem ipsum dolor sit amet, consectetur adip',

        },
        {
            id:2,
            titulo: 'Pelicula N2',
            foto: "",
            descrip: 'lorem ipsum dolor sit amet, consectetur adip',
        },{
            id:3,
            titulo: 'Pelicula N3',
            foto: "",
            descrip: 'lorem ipsum dolor sit amet, consectetur adip',
        },
        {
            id:4,
            titulo: 'Pelicula N4',
            foto: "",
            descrip: 'lorem ipsum dolor sit amet, consectetur adip',
        },
        
    ]
    return (
        <section className="top-data">
            {
                PeliData.map((elm, idx) => <Ficha key={`${idx}-${elm.icon}`} data={elm} /> )
            }
        </section>
    )
}
export default SeccionPeli