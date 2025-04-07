import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import './style.css'

function OpcionesMenu(props) {
    return (
        <div className="barra-navegacion">
            <ul className="barra">
                {
                    props.opciones.map((elm, idx) => 
                        
                    <li key={`${idx}-${elm.name}`}>

                            <Link to={elm.path}>
                                {elm.name}
                            </Link>
                        </li>
                    


                    )
                }

            </ul>
        </div>

    )
}
export default OpcionesMenu;