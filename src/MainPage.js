import './App.css';
import React, { Component } from 'react';
import PokeList from './PokeList.js'
import SearchBar from './SearchBar'
import Sort from './Sort.js'

export default class App extends Component {

    state = {
        filter: '',
        sort: '',
        sortType: 'pokemon'

    }




    render() {
        return (
            <>
                <SearchBar handle={this.handleChange} />
                <Sort handleSort={this.handleSort}
                    handleSortType={this.handleSortType} />
                < PokeList
                />
            </>
        );
    }
}


