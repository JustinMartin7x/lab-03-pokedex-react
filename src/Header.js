import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <div>
                <div className="App">
                    <header className="App-header">
                        <div className="pokedex">Pokedex</div>
                        <ul>
                            <li>
                                <Link to="./MainPage" >To Main Page</Link>
                                <Link to="./">Index Page</Link>
                            </li>
                        </ul>
                    </header>
                </div>

            </div>
        )
    }
}
