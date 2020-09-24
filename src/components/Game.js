import React from "react";
import Axios from "axios";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: [],
      platforms: [],
      comments: [],
    };
  }

  componentDidMount() {
    Axios.get("https://localhost:8000/game/" + this.props.match.params.id)
      .then((res) => {
        console.clear();
        console.log("Res", res);
        const game = res.data;
        const platforms = res.data.platforms;
        const comments = res.data.comments;
        this.setState({ game, platforms, comments });
      })
      .catch((res) => {
        console.log(res);
      });
  }

  render() {
    const game = this.state.game;
    const platforms = this.state.platforms;
    const comments = this.state.comments;

    return (
      <div>
        <h2>{game.name}</h2>
        <img src={game.image_url} alt=""></img>
        <br />
        Publisher: {game.publisher}
        <br />
        Published: {game.year_published}
        <br />
        Genre: {game.genre}
        <br />
        Platforms:{" "}
        <ul>
          {platforms.map((platform, index) => (
            <li key={index}>{platform.name}</li>
          ))}
        </ul>
        <br />
        Description: {game.description}
        <br />
        Comments:{" "}
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.content} ({comment.author}, {comment.date})</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Game;
