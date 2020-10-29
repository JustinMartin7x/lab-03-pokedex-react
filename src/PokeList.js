import React, { Component } from 'react'
import PokeCard from './PokeCard.js'






export default class PokeList extends Component {








    render() {
        const filteredPoke = this.props.poke.filter((item) => {
            if (!this.props.filter) return true;
            if (item.pokemon === this.props.filter) return true;
            return false;
        })

        return (
            <div>

                <section>
                    <form >
                        <input onChange={this.props.handle} />
                        <button>Don't Press</button>
                    </form>



                </section>
                <div className="container">
                    {
                        filteredPoke.map(card =>
                            <PokeCard
                                url={card.url_image}
                                name={card.pokemon}
                                type={card.type_1} />
                        )
                    }
                </div>

            </div>

        );



    }
}
