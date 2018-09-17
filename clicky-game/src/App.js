import React, { Component } from 'react';
import CharacterCard from "./components/CharacterCard";
import Wrapper from "./components/Wrapper";
import characters from "./characters.json";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import './App.css';

class App extends Component {
  state = {
    characters,
    clicked: [],
    score :0,
    topScore :0
  };

clickHandle = id => {
  console.log("clicked");
  this.setState({ clicked: this.state.clicked.concat(id) });
}

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
          clickHandle={this.clickHandle}
        />

      ))}
          
       </Wrapper>
      </React.Fragment>
    );
  }
  
}

export default App;
