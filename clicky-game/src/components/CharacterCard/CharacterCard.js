import React from "react";
import "./CharacterCard.css";
// import { Container, Col } from 'reactstrap';
 const CharacterCard = props => (
    
      
        <div className="img"
            value={props.id}
            onClick={() =>props.clickHandle(props.id)}>
            <div className="img-container">
              <img className = "click-item" alt={props.name} src={props.image} />
              
            </div>
              
        </div>
);
    export default CharacterCard;