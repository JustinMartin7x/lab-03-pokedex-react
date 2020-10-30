import React, { Component } from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import SearchPage from './SearchPage.js';
import Header from './Header.js'
import SortPage from './SortPage.js';
import HomePage from './HomePage.js'




export default class App extends Component {
  render() {
    return (
      <div className="main">
        <Router>
          <Header />
          <HomePage />
          <Switch>
            <Route
              path="/MainPage"
              exact
              render={(routerProps) => <SearchPage {...routerProps} />}
            />
            <Route
              path="/SortPage"
              exact
              render={(routerProps) =>
                <SortPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}