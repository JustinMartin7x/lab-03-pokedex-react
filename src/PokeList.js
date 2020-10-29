import React, { Component } from 'react'
import PokeCard from './PokeCard.js'






export default class PokeList extends Component {

    render() {

        return (

            <div className="container">
                {
                    this.props.poke.filter((item) => {
                        if (!this.props.filter) return true;
                        if (this.props.sortType === this.props.filter) return true;
                        return false;
                    })

                        .sort((a, b) => {
                            if (this.props.sortType === 'pokebase' && this.props.sort === "alphabetical") {
                                return a.pokebase.localeCompare(b.pokebase)
                            } else if (this.props.sortType === 'pokebase' && this.props.sort === "reverse") {
                                return b.pokebase.localeCompare(a.pokebase)
                            } else if (this.props.sortType === 'type_1' && this.props.sort === 'alphabetical') {
                                return a.type_1.localeCompare(b.type_1)
                            } else if (this.props.sortType === 'type_1' && this.props.sort === 'reverse') {
                                return b.type_1.localeCompare(a.type_1)
                            } else if (this.props.sort === 'alphabetical') {
                                return a[this.props.sortType] - b[this.props.sortType];
                            } else {
                                return b[this.props.sortType] - a[this.props.sortType];
                            }
                        })
                        .map(card =>
                            <PokeCard
                                url={card.url_image}
                                name={card.pokemon}
                                type={card.type_1} />
                        )
                }
            </div>



        );



    }
}
