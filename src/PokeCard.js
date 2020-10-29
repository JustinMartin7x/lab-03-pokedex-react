import React, { Component } from 'react'

export default class PokeCard extends Component {
    render() {
        return (
            <div className="pokeCard">
                <img src={this.props.url} alt="pokemon" className="pokeImg" />
                <div>Name: {this.props.name}</div>
                <div>Type: {this.props.type}</div>


            </div>
        )
    }
}
