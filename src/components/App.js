import React, { Component } from 'react';
import Header from './Header.js';
import Session from './Session.js';
import './App.css';

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
      <div id="app">
        <Header />
        <Session loggedInUsername={this.state.loggedInUsername} switchUserHandler={this.switchUser} />
      </div>
    );
  }
}

export default App;
