import React, { Component } from 'react';
import './PlanetItem.css';

class PlanetItem extends Component {
  render() {
    return (
      <li className="PlanetItem">
        <strong>{this.props.planet.name}</strong><br/>
        Population: {this.props.planet.population}<br/>
        Climate: {this.props.planet.climate}<br/>
        Terrain: {this.props.planet.terrain}<br/>
      </li>
    );
  }
}

export default PlanetItem;
