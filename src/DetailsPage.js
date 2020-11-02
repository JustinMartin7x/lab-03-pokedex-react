import React, { Component } from 'react'
import fetch from 'superagent'
const sleep = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, time)
});

export default class DetailsPage extends Component {

    state = {
        pokemon: [],
        loading: true
    }

    componentDidMount = async () => {
        this.setState({
            loading: true
        })
        const poke = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex/?pokemon=${this.props.match.params.pokemon}`);
        await sleep(20)
        console.log(this.props.match.params.poke)

        this.setState({
            pokemon: poke.body.results,
            loading: false
        })
    }
    render() {

        return (
            <div>
                {!this.state.loading ?
                    this.state.pokemon.map((poke, i) =>
                        <div
                            key="i"
                            className="pokeCard"
                            style={{ backgroundColor: poke.color_1, boxShadow: `0px 0px 25px ${poke.color_1}` }}
                        >
                            <img src={poke.url_image} alt="pokemon" className="pokeImg" />
                            <div>Name: {poke.pokemon}</div>
                            <div>Type: {poke.type_1}</div>

                        </div>)
                    :
                    "loading"
                }
            </div>
        )
    }
}
