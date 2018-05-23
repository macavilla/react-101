
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../routes/home';
import About from '../routes/about';
import Contact from '../routes/contact';

class Menu extends Component {
    render() {
        return (
            <Router>
                <Fragment>
                    <div className="menu">
                        <div className="button">
                            <Link to="/">HOME</Link>
                        </div>
                        <div className="button">
                            <Link to="/about">ABOUT</Link>
                        </div>
                        <div className="button">
                            <Link to="/contact">CONTACT</Link>
                        </div>
                    </div>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </Fragment>
            </Router>
        );
    }
}

export default Menu;