import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Typography from 'material-ui/Typography';

class GameList extends Component {
  style = {
    margin: "0.5em 1em"
  }

  render() {
    return (
      <Paper style={this.style}>
        <Typography component="p">
          Game list (coming soon!)
        </Typography>
      </Paper>
    );
  }
}

export default GameList;
