import React, { Component } from 'react';
import { randNum } from '../../utilities/utilities';
import './SearchForm.css';

class SearchForm extends Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleRandom = this.handleRandom.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getPoke(
      typeof this.state.searchQuery === 'string'
        ? this.state.searchQuery.toLowerCase()
        : this.state.searchQuery
    );
    this.setState({ searchQuery: '' });
  }

  handleRandom(e) {
    e.preventDefault();
    const rand = randNum();
    this.props.getPoke(rand);
    this.setState({ searchQuery: rand });
  }

  render() {
    return (
      <form className="SearchForm">
        <input
          className="SearchForm-input"
          type="text"
          name="searchQuery"
          id="searchQuery"
          onChange={this.handleChange}
          value={this.state.searchQuery}
          placeholder="Type a pokemon name or ID"
        />
        <button className="SearchForm-btn" onClick={this.handleSubmit}>
          Search
        </button>
        <button className="SearchForm-btn" onClick={this.handleRandom}>
          Random
        </button>
      </form>
    );
  }
}

export default SearchForm;
