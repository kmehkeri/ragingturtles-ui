import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

class NewGame extends Component {
  style = {
    margin: "0.5em 1em"
  }

  render() {
    return (
      <Paper style={this.style}>
        <Typography component="p">
          Create new game (coming soon!)
        </Typography>
      </Paper>
    );
  }
}

export default NewGame;
