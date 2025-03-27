import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function OpcionesMenu(props){
    return(
        <ul>
            {
                props.opciones.map((elm, idx) => 
                <li key={`${idx}`-`${elm.name}` }>
                   <Link to= {elm.path}>
                   {elm.name}
                   </Link> 
                </li>)
            }

        </ul>
    )
}
export default OpcionesMenu;