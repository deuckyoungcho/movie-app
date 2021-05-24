import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import { Home, Detail } from "./../routes";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/:id" component={Detail}></Route>
    </Router>
  );
};

export default App;
