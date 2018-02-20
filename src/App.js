import React, { Component } from 'react';
import './App.css';
//Importing react-router
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom"

//importing page components
import Home from "./Home.js";
import Contacts from "./Contacts.js";
import Procedures from "./Procedures.js"

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Link to="/">Home</Link> {""}
          <Link to="/procedures">Procedures</Link>{""}
          <Link to="/contacts">About us</Link>{""}
          <Route exact path="/" component={Home} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/procedures" component={Procedures} />
        </div>
      </Router>
    );
  }
}

export default App;
