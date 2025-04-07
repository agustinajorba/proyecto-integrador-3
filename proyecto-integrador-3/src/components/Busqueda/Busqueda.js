import React, { Component } from "react";


class Busqueda extends Component {
    constructor(props) {
        super(props);
        this.state = { valor: '' };
    }

    evitarSubmit(event) {
        event.preventDefault();
    }

    controlarCambios(event) {
        this.setState({ valor: event.target.value }, () => this.props.filtro(this.state.valor)
            );
    }

    render() {
        return (
            <div className="DivInput">
                <form onSubmit={(event) => this.evitarSubmit(event)} action='/peliculas'>
                    <input className="input" type="search"  name="busqueda" placeholder="Buscar Peliculas..." 
                    onChange={(event) => this.controlarCambios(event)} value={this.state.valor} />
                </form>
            </div>

        );
    } //hacerlo bien con el video
}
export default Busqueda;

