import React, { Component } from 'react';
import './PokeName.css';

class PokeName extends Component {
  render() {
    return (
      <div className="PokeName">
        <p className="PokeName-id">{this.props.pokeId}</p>
        <span> - </span>
        <p className="PokeName-name">{this.props.pokeName}</p>
      </div>
    );
  }
}

export default PokeName;
