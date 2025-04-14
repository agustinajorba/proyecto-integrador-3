import React, { Component } from "react";


class FiltroPeliculas extends Component {

    constructor(props) {
        super(props)
        this.state = {
            valorInput: '',
        }
    }

    manjearSubmit(evento) {
        evento.preventDefault();

    }

    controlarInput(evento) {
        this.setState(
            { valorInput: evento.target.value }, //vemos lo que el usuario escribe en el input
            () => this.props.filtro(this.state.valorInput) // lo que queremos que hagan una vez que el estado se actualice
        )

    }
    render() {
        return (
            <form className="filtro" onSubmit={(evento) => this.manjearSubmit(evento)}>
                <input onChange={(evento) => this.controlarInput(evento)} value={this.state.valorInput} placeholder="Buscar películas" />
            </form>
        )
    }

}
export default FiltroPeliculas;