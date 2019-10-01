import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Card from "./Card";
import Nav from "./Nav";
import Form from "./Form";
import Signup from "./Signup";
import Login from "./Login";
import Events from "./Events";
import Event from "./Event";

class Router extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/Nav" component={Nav} />
          <Route path="/Card" component={Card} />
          <Route path="/Form" component={Form} />
          <Route path="/Signup" component={Signup} />
          <Route path="/Login" component={Login} />
          <Route path="/Events" component={Events} />
          <Route path="/Event" component={Event} />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default Router;
