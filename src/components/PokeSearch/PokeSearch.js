import React, { Component } from 'react';
import Card from '../Card/Card';
import SearchForm from '../SearchForm/SearchForm';
import Error from '../Error/Error';
import { fetchPokemon } from '../../utilities/utilities';
import './PokeSearch.css';

class PokeSearch extends Component {
  constructor(props) {
    super(props);
    this.state = { searchQuery: '', poke: '' };
    this.getData = this.getData.bind(this);
  }
  async getData(query) {
    const data = await fetchPokemon(query);
    data === 'error'
      ? this.setState({ searchQuery: query, poke: 'error' })
      : this.setState({
          searchQuery: query,
          poke: data,
        });
  }

  render() {
    const toDisplay =
      this.state.poke === 'error' ? (
        <Error errorSearch={this.state.searchQuery} />
      ) : (
        <Card
          pokeId={this.state.poke.id}
          pokeName={this.state.poke.name}
          pokeType={this.state.poke.type}
          pokeSprites={this.state.poke.sprites}
        />
      );
    return (
      <section className="PokeSearch">
        <SearchForm getPoke={this.getData} />
        {this.state.poke && toDisplay}
      </section>
    );
  }
}

export default PokeSearch;
