import React, { Component } from 'react';
import logo from './logo.svg';
import $ from 'jquery';
import PlanetList from './PlanetList';
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.search = this.search.bind(this);
    this.handleQueryChange = this.handleQueryChange.bind(this);
    this.state = {
      planets: {
        count: 0,
        results: []
      },
      query: ''
    };
  }

  componentDidMount() {
    this.getPlanets();
  }

  getPlanets() {
    $.get(`http://swapi.co/api/planets?search=${this.state.query}`)
    .then(response => {
      this.setState({
        planets: response,
        query: this.state.query
      });
    });
  }

  search(e) {
    e.preventDefault();
    this.getPlanets();
  }

  handleQueryChange(e) {
    this.setState({
      planets: this.state.planets,
      query: e.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Skywalker's Guide to the Galaxy</h2>
          <form onSubmit={this.search}>
            <input type="text" onChange={this.handleQueryChange} placeholder="Search for planets"></input>
            <button type="submit">submit</button>
          </form>
        </div>
        <PlanetList planets={this.state.planets}/>
      </div>
    );
  }
}

export default App;
