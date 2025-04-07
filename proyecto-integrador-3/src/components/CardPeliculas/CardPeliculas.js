import React, { Component } from 'react'

export default class CardPeliculas extends Component {
    constructor(props){
        super(props)
        this.state = {
            dataPelicula : props.data
        }
    }
  render() {
    console.log('props peli', this.props)
    return (
      <div>{
        this.state.dataPelicula.title
        }</div>
    )
  }
}
