import React from "react";
// import gamesListData from "../data/games-list.json";
import Games from "./Games";
import axios from "axios";

class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // gamesList: gamesListData,
      gamesList: [],
    };
  }

  componentDidMount() {
    axios
      .get("https://localhost:8000/games")
      .then((res) => {
        console.clear();
        console.log("Res", res);
        const gamesList = res.data;
        this.setState({ gamesList });
      })
      .catch((res) => {
        console.clear();
        console.log(res);
      });
  }

  render() {
    return (
      <>
        <h1>Games</h1>
        {/* <Buttons /> */}
        <Games gamesList={this.state.gamesList} />
      </>
    );
  }
}

export default GamesList;
