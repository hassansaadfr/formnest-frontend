import React from "react";
import "./App.css";
import 'react-notifications/lib/notifications.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormEditor from "./pages/FormEditor";
import Reponses from "./component/Responses";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/formEditor/:id">
          <FormEditor />
        </Route>
        <Route path="/response/:id">
          <Reponses />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
