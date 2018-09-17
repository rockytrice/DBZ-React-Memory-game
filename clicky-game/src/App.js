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
    score : 0,
    topScore: 0
  };

clickHandle = id => {
  console.log("clicked");
  if (this.state.clicked.indexOf(id) === -1) {
    console.log("increment");
    this.handleIncrement();  
    this.setState({ clicked: this.state.clicked.concat(id) })
  }else{
    console.log("has already been clicked");
  } 
}
// handleIncrement increases this.state.count by 1
handleIncrement = () => {
  const newScore = this.state.score + 1;
  console.log("new score" + newScore);
  // We always use the setState method to update a component's state
  this.setState({ score: newScore });
};


// function for shuffling the cards 
 shuffleArray = (array) => {
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}



  render() {
    return (
      
     <div>      
      <Navbar 

      />
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
       <footer>
       <ul>
         <li>
         Score= {this.state.score} |
          Top Score= {this.state.topScore}
         </li>
       </ul>
        </footer> 
     </div>
      
      
    );
  }
  
}

export default App;
