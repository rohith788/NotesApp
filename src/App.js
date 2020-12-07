import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
import CardGrid from "./components/card-grid/card-grid.component";
import Header from "./components/header/header";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
}

const HomePage = () => {
  return (
    <div>
      <Header />
      <CardGrid />
    </div>
  );
};

export default App;
