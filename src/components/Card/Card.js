import React, { Component } from 'react';
import PokeName from '../PokeName/PokeName';
import PokeSprites from '../PokeSprites/PokeSprites';
import PokeTypes from '../PokeTypes/PokeTypes';
import './Card.css';

class Card extends Component {
  render() {
    return (
      <div className="Card">
        <PokeName pokeName={this.props.pokeName} pokeId={this.props.pokeId} />
        <div className="divider"></div>
        <PokeSprites spritesUrl={this.props.pokeSprites} />
        <div className="divider"></div>
        <PokeTypes types={this.props.pokeType} />
      </div>
    );
  }
}

export default Card;
