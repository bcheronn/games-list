import React from "react";
import Axios from "axios";

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      game: [],
    };
  }

  componentDidMount() {
    Axios.get("https://localhost:8000/game/" + this.props.match.params.id)
      .then((res) => {
        console.clear();
        console.log("Res", res);
        const game = res.data;
        this.setState({ game });
      })
      .catch((res) => {
        console.log(res);
      });
  }

  render() {
    return (
      <div>
        <h2>Game</h2>
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
