import React from 'react';
import SearchContainer from './component/SearchContainer/SearchContainer';
import HeaderContainer from './component/HeaderContainer/HeaderContainer';
import CardContainer from './component/CardContainer/CardContainer';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pokemons: []
    }
  };

  componentDidMount() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=200')
      .then(response => response.json())
      .then(pokemon => this.setState({ pokemons: pokemon.results }))
  };

  render() {
    return (
      <div>
        <HeaderContainer />
        <main>
          <SearchContainer placeholder={'Search Pokemon'}/>
          <CardContainer pokes={this.state.pokemons} />
        </main>
      </div>
    );
  }
}

export default App;
