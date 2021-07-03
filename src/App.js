import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import '@material-ui/core';
import './App.css';
import Home from "./home.js";
import Kyc from "./components/kyc"

class App extends Component {
  render() {
      return (
        <HashRouter>
          <Switch>
              <Route exact path="/kyc" component={Kyc}></Route>
              <Home></Home>
          </Switch>
        </HashRouter>
      );
  }
}

export default App;
