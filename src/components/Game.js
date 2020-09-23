import React from "react";

class Game extends React.Component {
  render() {
    return (
      <div>
        <h2>Game: {this.props.match.params.id}</h2>
        <img src="" alt=""></img>
        <h5>Name</h5>
        Publisher:
        <br />
        Published:
        <br />
        Genre:
        <br />
        Platforms:
        <br />
        Description:
      </div>
    );
  }
}

export default Game;
