import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import '@material-ui/core';
import './App.css';
import Home from "./home.js";
import Kyc from "./components/kyc"

class App extends Component {
  render() {
      return (
        <BrowserRouter>
          <Switch>
              <Route exact path="/kyc" component={Kyc}></Route>
              <Home></Home>
          </Switch>
        </BrowserRouter>
      );
  }
}

export default App;
