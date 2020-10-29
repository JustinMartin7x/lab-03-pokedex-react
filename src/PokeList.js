import React, { Component } from 'react'
import PokeCard from './PokeCard.js'
import fetch from 'superagent'






export default class PokeList extends Component {
    state = {
        pokemon: [],
        name: '',
    }

    componentDidMount = async () => {
        const items = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex`);
        this.setState({ pokemon: items.body.results })
        console.log(this.state.pokemon)

    };
    handleSubmit = async (e) => {
        e.preventDefault()
        const items = await fetch.get(`https://alchemy-pokedex.herokuapp.com/api/pokedex?pokemon=${this.state.name}&defense=10`)
        this.setState({ pokemon: items.body.results })
    }
    handleChange = (e) => {
        this.setState({ name: e.target.value })
    }
    selectChange = (e) => {
        this.setState({ type: e.target.value })
    }

    render() {

        return (

            <div className="container">
                <div>
                    <form onSubmit={this.handleSubmit}>
                        <input onChange={this.handleChange}></input>
                        <button>Search</button>

                    </form>

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



        );



    }
}
