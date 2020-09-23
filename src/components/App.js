import React from "react";
import Game from "./Game";
import { Switch, Route } from "react-router-dom";
import GamesList from "./GamesList";

const App = () => (
  <>
    <Switch>
      <Route path="/game/:id" component={Game}></Route>
      <Route path="/" component={GamesList}></Route>
    </Switch>
  </>
);

export default App;
