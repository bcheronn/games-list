import React from "react";
import gamesListData from "../data/games-list.json";
import Games from "./Games";

class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: gamesListData,
    };
  }

  render() {
    return (
      <div className="gameslist">
        <h1>Games</h1>
        <div className="buttons">{/* <Buttons /> */}</div>
        <div className="games"><Games gamesList={this.state.gamesList}/></div>
      </div>
    );
  }
}

export default GamesList;
