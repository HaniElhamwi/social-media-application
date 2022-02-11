import React, { useState } from "react";
import "./App.css";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import ChatApp from "./Pages/Chat/ChatApp";
import Setting from "./Pages/Setting/Setting";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/signup" component={Signup} />

        <Route path="/chat" component={ChatApp} />
        <Route path="/setting" component={Setting} />

      </Switch>
    </Router>
  );
}

export default App;
