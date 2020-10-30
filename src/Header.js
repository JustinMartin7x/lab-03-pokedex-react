import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export default class Header extends Component {
    render() {
        return (

            <header className="App-header">
                <div className="pokedex"> Pokedex </div>
                <div clasname="header-list">
                    <ul>
                        <li>
                            <Link to="./">Home</Link>
                            <Link to="./MainPage" >Search By Name </Link>
                            <Link to="./SortPage">Sort by Attribute </Link>
                        </li>
                    </ul>
                </div>
            </header>

        )
    }
}
