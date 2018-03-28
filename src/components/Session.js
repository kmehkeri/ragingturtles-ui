import React, { Component } from 'react';

class Session extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formUsername: '',
      formPassword: '',
      loginError: null
    };
  }

  handleUsernameChange = (event) => {
    this.setState({ formUsername: event.target.value });
  }

  handlePasswordChange = (event) => {
    this.setState({ formPassword: event.target.value });
  }

  handleLogIn = (event) => {
    var data = { username: this.state.formUsername, password: this.state.formPassword };
    var headers = { 'Accept': 'application/json, text/plain, */*', 'Content-Type': 'application/json' };
    fetch("/session", { method: "POST", headers: headers, credentials: "include", body: JSON.stringify(data) })
      .then(response => {
        this.props.switchUserHandler(this.state.formUsername);
        this.setState({ formUsername: '', formPassword: '' });
      })
      .catch(error => this.setState({ formUsername: '', formPassword: '', loginError: 'Error logging in!' }));
    event.preventDefault();
  }

  handleLogOut = (event) => {
    fetch("/session", { method: "DELETE", credentials: "include" })
      .then(response => {
        this.props.switchUserHandler(null);
        this.setState({ formUsername: '', formPassword: '' });
      })
      .catch(error => this.setState({ formUsername: '', formPassword: '', loginError: 'Error logging out!' }));
    event.preventDefault();
  }

  render() {
    const loginSection = (
      <form onSubmit={this.handleLogIn}>
        <label id="session-username-label">Username:</label>
        <input id="session-username-input" type="text" value={this.state.formUsername} onChange={this.handleUsernameChange} />
        <label id="session-password-label">Password:</label>
        <input id="session-password-input" type="text" value={this.state.formPassword} onChange={this.handlePasswordChange} />
        <input id="session-signin-button" type="submit" value="Log in" />
      </form>
    );
    const logoutSection = (
      <div>
        <p id="session-username-label">{this.props.loggedInUsername}</p>
        <button id="session-signout-button" onClick={this.handleLogOut.bind(this)}>Log out</button>
      </div>
    );
    return (
      <div className="Session">
        {this.props.loggedInUsername ? logoutSection : loginSection}
      </div>
    );
  }

  componentDidMount() {
    fetch("/session", { credentials: "same-origin" })
      .then(response => response.json())
      .then(data => this.props.switchUserHandler(data.username))
      .catch(error => this.props.switchUserHandler(null));
  }
}

export default Session;
