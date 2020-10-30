import React, { Component } from 'react'
import PokeCard from './PokeCard.js'
import fetch from 'superagent'

export default class SortPage extends Component {
    state = {
        pokemon: [],
        type: 'type_1',
        direction: ''



    }
    componentDidMount = async () => {
        const items = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`);
        this.setState({ pokemon: items.body.results })

    };
    handleDirectionChange = async (e) => {

        const item = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=${this.state.type}&direction=${e.target.value}`)
        this.setState({
            direction: e.target.value,
            pokemon: item.body.results
        })
        console.log(e.target.value)
    }
    handleTypeChange = async (e) => {
        const item = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?sort=${e.target.value}&direction=${this.state.direction}`)
        this.setState({
            type: e.target.value,
            pokemon: item.body.results
        })


    }




    render() {
        return (
            <div>
                <div>

                    <select onChange={this.handleDirectionChange}>
                        <option value="asc">Ascending</option>
                        <option value="desc">Descending</option>
                    </select>
                    <select onChange={this.handleTypeChange}>
                        <option value="type_1">Type</option>
                        <option value="attack">Attack</option>
                        <option value="defense">Defense</option>
                        <option value="hp">HP</option>
                        <option value="speed">Speed</option>
                    </select>

                </div>
                {
                    this.state.pokemon.map(card =>
                        <PokeCard
                            url={card.url_image}
                            name={card.pokebase}
                            type={card.type_1} />
                    )
                }

            </div>
        )
    }
}
