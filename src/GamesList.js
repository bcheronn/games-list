import React from "react";
import gamesListSource from "./games-list.json";

class GamesList extends React.Component {
  render() {
    return (
      <div className="gameslist">
        <h1>Games</h1>
        <div className="buttons">
          {/* <Buttons /> */}
        </div>
        <div className="games">
          {/* <Games /> */}
        </div>
      </div>
    );
  }
}

export default GamesList;
