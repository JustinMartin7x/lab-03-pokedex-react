import React, { Component } from 'react'
import PokeCard from './PokeCard.js'
import fetch from 'superagent'

const sleep = (time) => new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve()
    }, time)
});





export default class PokeList extends Component {
    state = {
        pokemon: [],
        name: '',
        type: 'type_1',
        direction: 'asc'
    }

    componentDidMount = async () => {
        const items = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`);
        this.setState({ pokemon: items.body.results })

    };
    handleSubmit = async () => {

        await this.fetchPokemon()
    }
    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }
    selectChange = (e) => {
        this.setState({ type: e.target.value })
    }
    handleDirectionChange = async (e) => {
        this.setState({
            direction: e.target.value,
        })
    }
    handleTypeChange = async (e) => {
        this.setState({
            type: e.target.value,
        })
    }
    fetchPokemon = async () => {
        this.setState({
            loading: true
        })
        let items = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.name}&sort=${this.state.type}&direction=${this.state.direction}&perPage=500`)
        await sleep(2000)


        this.setState({
            pokemon: items.body.results,
            loading: false
        })
    }

    render() {

        return (

            <div className="container">
                <div>
                    <div>Search Pokemon by name.</div>

                    <input onChange={this.handleChange}></input>

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
                    <button onClick={this.handleSubmit}>Search</button>

                </div>
                { !this.state.loading ?

                    this.state.pokemon.map(card =>
                        <PokeCard
                            url={card.url_image}
                            name={card.pokebase}
                            type={card.type_1} />
                    ) :
                    "Loading!!"

                }
            </div>



        );



    }
}
