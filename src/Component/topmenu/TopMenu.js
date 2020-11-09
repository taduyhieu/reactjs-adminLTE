import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class TopMenu extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg navbar-dark navbar-custom fixed-top">
                    <div className="container">
                    <a className="navbar-brand" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            {/* <Link className="nav-link" to="/">Home</Link> */}
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="/about">Log In</a>
                        </li>
                        </ul>
                    </div>
                    </div>
                </nav>
        );
    }
}

export default TopMenu;