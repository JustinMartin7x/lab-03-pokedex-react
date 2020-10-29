import './App.css';
import React, { Component } from 'react';
import PokeList from './PokeList.js'
import pokemon from './Pokedex.js'

export default class App extends Component {
  state = {
    search: '',
    filter: '',
    value: ''
  }
  handleChange = (event) => {
    this.setState({ filter: event.target.value })
  }



  render() {
    return (
      <>
        <div className="App">
          <header className="App-header">
            <div className="pokedex">Pokedex</div>
          </header>
        </div>
        <div className="display">
          <PokeList
            poke={pokemon}
            filter={this.state.filter}
            handle={this.handleChange}
          />


        </div>
      </>
    );
  }
}

