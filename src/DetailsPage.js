import React, { Component } from 'react'
import fetch from 'superagent'
const sleep = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, time)
});

export default class DetailsPage extends Component {

    state = {
        pokemon: {},
        loading: true
    }
    componentDidMount = async () => {
        const poke = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/${this.props.match.params._id}`);

        this.setState({
            pokemon: poke.body.results,
            loading: false
        })
    }
    render() {

        return (
            <div>

                {
                    !this.state.loading ?
                        <div
                            className="pokeCard"
                            style={{ backgroundColor: this.state.pokemon.color_1, boxShadow: `0px 0px 25px ${this.state.pokemon.color_1}` }}
                        >
                            <img src={this.state.pokemon.url_image} alt="pokemon" className="pokeImg" />
                            <div>Name: {this.state.pokemon.pokebase}</div>
                            <div>Type: {this.state.pokemon.type_1}</div>
                        </div>
                        :


                        "loading"
                }

            </div>
        )
    }
}
