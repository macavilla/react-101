import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Menu from './components/Menu';
import Footer from './components/Footer';
import Home from './routes/home';
import About from './routes/about';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="wrapper">
        <Menu />
        <Footer />
        


      </div>
    );
  }
}

export default App;
