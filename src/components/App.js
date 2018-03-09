import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Session from './Session.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedInUsername: null
    }
  }

  switchUser = (username) => {
    this.setState({ loggedInUsername: username });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Raging Turtles</h1>
        </header>
        <Session switchUserHandler={this.switchUser} />
        {/* Game list */}
        {/* Game */}
      </div>
    );
  }
}

export default App;
