import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './routes/home';
import About from './routes/about';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/about">About</Link>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </Fragment>
      </Router>
    );
  }
}

export default App;
