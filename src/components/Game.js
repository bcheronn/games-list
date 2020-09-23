import React from "react";

class Game extends React.Component {
  render() {
    return <h2>Game: {this.props.match.params.id}</h2>;
  }
}

export default Game;
