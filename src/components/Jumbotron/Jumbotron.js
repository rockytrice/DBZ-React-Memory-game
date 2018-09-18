import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import "./Jumbotron.css";
// import Dragonball from "./Dragonball.mp4";
// import VideoBackground from "./Video";

const jumbotron = () => {
  return (
    <div>
      <Jumbotron fluid>
        {/* <VideoBackground /> */}
         {/* <video className="video-background"autoPlay loop muted> 
            <source src={Dragonball} type="video/mp4" /> 
            </video> */}
        <Container fluid>
          <h1 className="display-3">DBZ Memory Game</h1>
          <p className="lead">Click on an image to earn points, but don't click on an image more than once!!if you do you lose!!</p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default jumbotron;