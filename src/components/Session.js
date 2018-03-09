import React, { Component } from 'react';

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formUsername: '',
      loggedInUsername: null
    };
  }

  handleChange = (event) => {
    this.setState({ formUsername: event.target.value });
  }

  handleLogIn = (event) => {
    var data = { username: this.state.formUsername, password: this.state.formUsername };
    var headers = { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' };
    fetch("/session", { method: "POST", headers: headers, credentials: "include", body: JSON.stringify(data) })
      .then(response => {
        this.setState({ loggedInUsername: this.state.formUsername });
        this.props.switchUserHandler(this.state.formUsername);
      })
      .catch(error => alert("Error logging in." + error));
    event.preventDefault();
  }

  handleLogOut = (event) => {
    fetch("/session", { method: "DELETE", credentials: "include" })
      .then(response => {
        this.setState({ formUsername: '', loggedInUsername: null });
      })
      .catch(error => this.setState({ formUsername: '', loggedInUsername: null }));
    event.preventDefault();
  }

  render() {
    return (
      <div className="Session">
        <form onSubmit={this.handleLogIn}>
          <label id="Session-username-prompt">Username:</label>
          <input id="Session-username-text" type="text" value={this.state.formUsername} onChange={this.handleChange} />
          <input id="Session-signin-button" type="submit" value="Log in" />
        </form>

        <p id="Session-username-label">{this.state.loggedInUsername}</p>
        <button id="Session-signout-button" onClick={this.handleLogOut.bind(this)}>Log out</button>
      </div>
    );
  }

  componentDidMount() {
    fetch("/session", { credentials: "same-origin" })
      .then(response => response.json())
      .then(data => this.setState({ loggedInUsername: data.username }))
      .catch(error => this.setState({ loggedInUsername: null }));
  }
}

export default Session;
