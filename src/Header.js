import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (

            <header className="App-header">
                <div className="pokedex">
                    <h1>Pokedex</h1>
                </div>
                <div className="header-list">
                    <ul>
                        <li>
                            <Link to="./">Home</Link>
                        </li>
                        <li>
                            <Link to="./MainPage" >Search By Name </Link>
                        </li>
                        <li>
                            <Link to="./SortPage">Sort by Attribute </Link>
                        </li>

                    </ul>
                </div>
            </header>

        )
    }
}
