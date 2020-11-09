import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TopMenu from './Component/topmenu/TopMenu'
import Header from './Component/header/Header'
import Content from './Component/content/Content'
import TopNav from './Component/TopNav/TopNav'
import SideNav from './Component/SideNav/SideNav'
import Footer from './Component/Footer/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

import './App.css';
import './assets/css/style.css';
import './assets/css/dataTables.css';

import { Router } from 'react-router-dom';
import RoutePage from './router/RoutePage';

class App extends Component {
  constructor(props) {
    super(props);
    console.log("constructor");
    this.state = {
      test: "11111"
    }
  }

  
  componentWillMount() {
    console.log("componentWillMount");
  }
  componentDidMount() {
    console.log("componentDidMount");
  }

  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  componentWillUpdate() {
    console.log("componentWillUpdate");
  }
  
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("shouldCompocomponentWillUnmountnentUpdate");
  }

  test = () => {
    this.setState({test: "2222"})
  }
  
  render() {
    return (
        <div>
            <TopNav/>
            <div id="layoutSidenav">
                <SideNav/>
                <div id="layoutSidenav_content">
                    <Content/>
                    <Footer/>
                </div>
            </div>
        </div>
    )
  }
}
export default App;
