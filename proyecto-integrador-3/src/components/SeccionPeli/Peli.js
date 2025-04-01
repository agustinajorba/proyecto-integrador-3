import React from "react";
import {Link} from 'react-router-dom'
// ${props.data.id} Deberia ir dentro del link pero todavia no tengo el detalles
function Peli(props){
    return(
        <article className="data-detail">
            <div className="card-content">
                <Link to={`/`}>
                    <h4>{props.data.titulo}</h4>
                </Link>
                <p>{props.data.descrip}</p>
            </div>
        </article>
    )
}

export default Peli