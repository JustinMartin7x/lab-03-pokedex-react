import React, { Component } from 'react'


export default class Sort extends Component {
    render() {
        return (
            <div>
                <select onChange={this.props.handleSort}>
                    <option value="alphabetical">A-Z</option>
                    <option value="reverse">Z-A</option>
                </select>
                <select onChange={this.props.handSortType}>
                    <option value="pokebase">name</option>
                    <option value="type_1">type</option>
                    <option value="attack">attack</option>
                    <option value="speed">speed</option>
                    <option value="defense">defense</option>
                    <option value="hp">HP</option>

                </select>

            </div>
        )
    }
}
