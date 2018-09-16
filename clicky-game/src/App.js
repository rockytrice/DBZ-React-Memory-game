import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import './App.css';

class App extends Component {
  state = {
    characters
  };

  render() {
    return (
      <Wrapper>
      {this.state.characters.map(character => (
        <CharacterCard
          id={character.id}
          image={character.image}
          key={character.id}
        />

      ))}
          
       </Wrapper>
    );
  }
  
}

export default App;
