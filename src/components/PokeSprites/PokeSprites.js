import React, { Component } from 'react';
import './PokeSprites.css';
// import { v4 as uuidv4 } from 'uuid';

class PokeSprites extends Component {
  render() {
    const spriteElements =
      this.props.spritesUrl &&
      this.props.spritesUrl.map(element => {
        return <img key={element} src={element} alt="poke sprite"></img>;
      });
    return <div className="PokeSprites">{spriteElements}</div>;
  }
}

export default PokeSprites;
