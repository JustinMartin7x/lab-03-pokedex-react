import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class HomePage extends Component {
    render() {
        return (
            <div className="main-page">
                <section>
                    <p>Welcome to my Pokemon React App!</p>
                    <section className="list">
                        <ul>
                            <li>
                                <Link to="./MainPage" >Search By Name </Link>
                            </li>
                            <li>
                                <Link to="./SortPage"> Sort By Attribute
                                </Link>
                            </li>
                        </ul>

                    </section>


                </section>

            </div>
        )
    }
}
