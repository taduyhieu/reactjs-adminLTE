import React, { Component } from 'react';
import Content from '../Component/content/Content';
import Header from '../Component/header/Header';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import TopMenu from '../Component/topmenu/TopMenu';
class RoutePage extends Component {
    render() {
        return (
            <div>
                <Route exact path="/">
                    <Header />
                </Route>
                <Route path="/about">
                    <Content />
                </Route>
            </div>
        );
    }
}

export default RoutePage;