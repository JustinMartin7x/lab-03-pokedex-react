import './App.css';
import React, { Component } from 'react';
import PokeList from './PokeList.js'
import pokemon from './Pokedex.js'
import Header from './Header.js'
import SearchBar from './SearchBar'
import Sort from './Sort.js'

export default class App extends Component {

  state = {
    filter: '',
    sort: '',
    sortType: 'pokemon'

  }
  handleChange = (event) => {
    this.setState({ filter: event.target.value })
  }
  handleSort = (e) => {
    this.setState({ sort: e.target.value })
  }
  handleSortType = (e) => {
    this.setState({ sortType: e.target.value })
  }



  render() {
    return (
      <>
        <Header />
        <SearchBar handle={this.handleChange} />
        <Sort handleSort={this.handleSort}
          handleSortType={this.handleSortType} />
        < PokeList
          poke={pokemon}
          filter={this.state.filter}
          pokemon={this.pokemon}
          sort={this.state.sort}
          sortType={this.state.sortType}
        />
      </>
    );
  }
}

