import React, { Component } from 'react';
import './Error.css';

class Error extends Component {
  render() {
    return (
      <div className="Error">Sorry, couldn't find anything for '{this.props.errorSearch}'</div>
    );
  }
}

export default Error;
