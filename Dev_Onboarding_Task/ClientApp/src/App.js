import React, { Component } from "react";
import { Route } from "react-router";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import Customer from "./components/Customer";
import { Container } from "semantic-ui-react";

export default class App extends Component {
  displayName = App.name;

  render() {
    return (
      <Container>
        <Route exact path="/" component={Home} />
        <Route path="/customer" component={Customer} />
        <Route path="/fetchdata" component={FetchData} />
      </Container>
    );
  }
}
