import React, { Component } from "react";
import { Route } from "react-router";
import { FetchData } from "./components/FetchData";
import Customer from "./components/Customer";
import { Container } from "semantic-ui-react";
import Navbar from "./components/Navbar";


export default class App extends Component {
  displayName = App.name;

  render() {
      return (

          <Container>
              <Navbar/>
        <Route exact path="/" component={Customer} />
        <Route path="/sales" component={FetchData} />
      </Container>
    );
  }
}
