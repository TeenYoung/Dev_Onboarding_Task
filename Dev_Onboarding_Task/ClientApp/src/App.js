import React, { Component } from "react";
import { Route } from "react-router";
import { Home } from "./components/Home";
import { FetchData } from "./components/FetchData";
import Customer from "./components/Customer";
import { Container } from "semantic-ui-react";
import Navbar from "./components/Nav-bar"

export default class App extends Component {
  displayName = App.name;

  render() {
      return (
          <React.Fragment>
          <Navbar />
      <Container>
        <Route exact path="/" component={Customer} />
        <Route path="/fetchdata" component={FetchData} />
      </Container>
              </React.Fragment>
    );
  }
}
