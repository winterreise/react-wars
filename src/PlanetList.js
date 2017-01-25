import React, { Component } from 'react';
import PlanetItem from './PlanetItem';
import './PlanetList.css';

class PlanetList extends Component {

  render() {
    return (
      <ul className="PlanetList">
        {this.props.planets.results.map(p => <PlanetItem key={p.name} planet={p}/>)}
      </ul>
    );
  }

}

export default PlanetList;
