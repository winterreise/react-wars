import React, { Component } from 'react';
import logo from './logo.svg';
import $ from 'jquery';
import PlanetList from './PlanetList';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      planets: {
        count: 0,
        results: []
      }
    };
  }

  componentDidMount() {
    $.get('http://swapi.co/api/planets')
    .then(response => {
      this.setState({
        planets: response
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Skywalker's Guide to the Galaxy</h2>
        </div>
        <PlanetList planets={this.state.planets}/> 
      </div>
    );
  }
}

export default App;
