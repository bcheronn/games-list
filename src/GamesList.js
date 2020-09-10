import React from "react";
import gamesListData from "./games-list.json";

class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gamesList: gamesListData.slice(),
    };
  }

  render() {
    return (
      <div className="gameslist">
        <h1>Games</h1>
        <div className="buttons">{/* <Buttons /> */}</div>
        <div className="games">{/* <Games /> */}</div>
      </div>
    );
  }
}

export default GamesList;
