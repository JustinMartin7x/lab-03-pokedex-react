import React, { Component } from 'react'

export default class SearchBar extends Component {
    render() {
        return (
            <div>
                <section>
                    <form >
                        <input onChange={this.props.handle} />
                        <button>Don't Press</button>
                    </form>
                </section>
            </div>
        )
    }
}
