import React, { Component } from 'react';
import CssBaseline from 'material-ui/CssBaseline';
import Header from './Header.js';
import NewGame from './NewGame.js';
import GameList from './GameList.js';
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
      <CssBaseline>
        <div id="app">
          <Header />
          <NewGame />
          <GameList />
          <Session loggedInUsername={this.state.loggedInUsername} switchUserHandler={this.switchUser} />
        </div>
      </CssBaseline>
    );
  }
}

export default App;
