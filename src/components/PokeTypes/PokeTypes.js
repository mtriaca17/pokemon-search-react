import React, { Component } from 'react';
import './PokeTypes.css';
class PokeTypes extends Component {
  render() {
    const typeElements =
      this.props.types &&
      this.props.types.map(type => {
        return (
          <p key={type} className={type}>
            {type}
          </p>
        );
      });

    return <div className="PokeTypes">{typeElements}</div>;
  }
}

export default PokeTypes;
