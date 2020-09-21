import React from "react";
import Game from "./Game";
import { Switch, Route } from "react-router-dom";
import GamesList from "./GamesList";

export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/game/:id">
          <Game />
        </Route>
        <Route path="/">
          <GamesList />
        </Route>
      </Switch>
    </div>
  );
}
