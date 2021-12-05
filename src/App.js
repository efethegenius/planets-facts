import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import { Error } from "./Error";
import { Planet } from "./Planet";
import { Navbar } from "./Navbar";
import React, { useState } from "react";
import { Creator } from "./Creator";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/planet/:name" children={<Planet />}></Route>
        {/* <Route exact path="/">
          <Error />
        </Route> */}
        <Route
          exact
          path="/"
          render={() => {
            return (
              <>
                <Redirect to="/planet/Earth" />
              </>
            );
          }}
        />
      </Switch>
      <Creator />
    </Router>
  );
}

export default App;
