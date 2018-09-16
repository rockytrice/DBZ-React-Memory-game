import React from "react";
import "./CharacterCard.css";
// import { Container, Col } from 'reactstrap';
 const CharacterCard = props => (
  // <Container>
    
      
        <div className="card">
            <div className="card-img">
            <div className="img-container">
              <img className = "click-item" alt={props.name} src={props.image} />
              
            </div>
              
            </div>
        </div>
      
    
//  </Container>
);
    export default CharacterCard;