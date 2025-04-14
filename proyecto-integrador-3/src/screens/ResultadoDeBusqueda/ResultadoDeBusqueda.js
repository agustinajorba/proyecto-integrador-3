import React, {Component} from 'react';
import CardPeliculas from '../../components/CardPeliculas/CardPeliculas';
import './style.css'

export default class ResultadoDeBusqueda extends Component{
    constructor(props){
        super(props)
        this.state = {
            busqueda: props.match.params.busqueda,
            resultados: [],
            cargar:true
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/search/movie?query=${this.state.busqueda}&api_key=15879dad47bfb7f22061a18ffdf1b790`)
        .then(resp => resp.json())
        .then(data => this.setState({resultados: data.results, cargar:false}))
        .catch(err => console.log(err))
    }

    render() {
        const cargando = this.state.cargar;
        return (
            <div>
            <p className='resultadosBus'>Resultados de tu búsqueda: "{this.state.busqueda}"</p>
            <section className='containerPopu'>
                { cargando ? ( 
          <p className='errorDetail'>Cargando...</p>
        ) :this.state.resultados.length > 0 ? (
                            this.state.resultados.map((peli, idx) => (
                                <CardPeliculas key={idx} data={peli} />
                            ))
                        ) : (
                            <p>No se encontraron resultados.</p>
                        )}
            </section>
            </div>
        )
    }
}