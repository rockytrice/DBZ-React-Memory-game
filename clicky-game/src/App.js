import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import './App.css';

class App extends Component {
  state = {
    characters
  };

  render() {
    return (
      <React.Fragment>
      <Navbar />
      <Jumbotron />
       <Wrapper>
      {this.state.characters.map(character => (
        <CharacterCard
          id={character.id}
          image={character.image}
          key={character.id}
        />

      ))}
          
       </Wrapper>
      </React.Fragment>
    );
  }
  
}

export default App;
