import React from 'react';
import SearchContainer from './component/SearchContainer/SearchContainer';
import HeaderContainer from './component/HeaderContainer/HeaderContainer';
import CardContainer from './component/CardContainer/CardContainer';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: [],
      searchField: ''
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  };

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=200')
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemons: pokemon.results }))
  };

  handleSearchChange(val) {
    this.setState({searchField: val});
  };

  render() {
    const { pokemons, searchField } = this.state;
    const filteredPokes = pokemons.filter(pokes => pokes.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div>
        <HeaderContainer />
        <main>
          <SearchContainer pokes={this.state.pokemons} searchFieldChange={this.handleSearchChange}/>
          <CardContainer pokes={filteredPokes} />
        </main>
      </div>
    );
  }
}

export default App;
