import React from "react";

class Games extends React.Component {
  render() {
    // const gamesListSize = this.props.gamesList.length;
    const gamesList = this.props.gamesList;
    const gamesCards = gamesList.map((game, index) => {
      return (
        <div key={index} className="game">
          <a href={`/game/${game.ID}`}>
            <img src="https://picsum.photos/200/300" alt="" />
          </a>
          <h2>{game.Name}</h2>
          <p>
            Platform : {game.Platform}
            <br />
            Year : {game.Year}
            <br />
            Genre : {game.Genre}
            <br />
            Publisher : {game.Publisher}
          </p>
        </div>
      );
    });

    return <div>{gamesCards}</div>;
  }
}

export default Games;
