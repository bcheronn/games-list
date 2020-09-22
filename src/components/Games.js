import React from "react";
import { Link } from "react-router-dom";

const Games = (props) => {
  const gamesList = props.gamesList;
  const gamesCards = gamesList.map((game, index) => {
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
        Platforms:{" "}
        <ul>
          {game.platforms.map((platform, index) => (
            <li key={index}>{platform.name}</li>
          ))}
        </ul>
        <br />
        Description: {game.description}
      </div>
    );
  });

  return <>{gamesCards}</>;
};

export default Games;
