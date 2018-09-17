import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import "./Jumbotron.css";
// import Dragonball from "./Dragonball.mp4";
import VideoBackground from "./Video";

const jumbotron = () => {
  return (
    <div>
      <Jumbotron fluid>
        <VideoBackground />
         {/* <video className="video-background"autoPlay loop muted> 
            <source src={Dragonball} type="video/mp4" /> 
            </video> */}
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default jumbotron;