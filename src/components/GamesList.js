import React from "react";
// import gamesListData from "../data/games-list.json";
import Games from "./Games";
import Axios from "axios";

class GamesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // gamesList: gamesListData,
      gamesList: [],
    };
  }

  componentDidMount() {
    Axios.get("https://localhost:8000/games")
      .then((res) => {
        console.clear();
        console.log("Res", res);
        const gamesList = res.data;
        this.setState({ gamesList });
      })
      .catch((res) => {
        console.log("Catch", res);
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
