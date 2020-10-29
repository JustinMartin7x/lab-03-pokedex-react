import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import MainPage from './MainPage.js';
import Header from './Header.js'



export default class App extends Component {
  render() {
    return (
      <div>

        <Router>
          <Header />
          <Switch>
            <Route
              path="/MainPage"
              exact
              render={(routerProps) => <MainPage {...routerProps} />}
            />
          </Switch>
        </Router>
      </div>
    )
  }
}