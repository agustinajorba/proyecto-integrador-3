import React from "react";
import Peli from './Peli'

function SeccionPeli() {
    const PeliData = [
        {
            id: 1,
            titulo: 'Pelicula N1',
            foto: "",
            descrip: 'lorem ipsum dolor sit amet, consectetur adip',

        },
        {
            id: 2,
            titulo: 'Pelicula N2',
            foto: "",
            descrip: 'lorem ipsum dolor sit amet, consectetur adip',
        }, {
            id: 3,
            titulo: 'Pelicula N3',
            foto: "",
            descrip: 'lorem ipsum dolor sit amet, consectetur adip',
        },
        {
            id: 4,
            titulo: 'Pelicula N4',
            foto: "",
            descrip: 'lorem ipsum dolor sit amet, consectetur adip',
        },

    ]
    return (
        <>
            {
                PeliData.map((elm, idx) =>
                    <li key={`${idx}-${elm.icon}`} className="pelicula">
                        <Peli data={elm} />
                    </li>

                )}
        </>


    )
}
export default SeccionPeli