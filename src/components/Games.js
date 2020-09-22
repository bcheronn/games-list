import React from "react";
import { Link } from "react-router-dom";

const Games = (props) => {
  const gamesList = props.gamesList;
  const gamesCards = gamesList.map((game, index) => {
    // const gameURL = "/game/".concat(game.id);

    return (
      <div key={index}>
        <img src={game.image_url} alt=""></img>
        <Link to={`/game/${game.id}`}>
          <h5>{game.name}</h5>
        </Link>
        Publisher: {game.publisher}
        <br />
        Published: {game.year_published}
        <br />
        Genre: {game.genre}
        <br />
        Description: {game.description}
        {/* "id"
            "image_url"
            "platforms"
            "comments" */}
      </div>
    );
  });

  return <>{gamesCards}</>;
};

export default Games;
