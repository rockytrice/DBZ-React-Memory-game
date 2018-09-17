import React from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
   } from 'reactstrap';
import "./Navbar.css";

export default class Example extends React.Component {
    render() {
        return (
        <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="#">
              <img   alt="DBZ logo" src="http://www.freelogovectors.net/wp-content/uploads/2017/01/dragon-ball-z.png" height="50"width="200" />
              </NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    
                  </NavItem>
                  <NavItem>

                  </NavItem>
                 </Nav> 
            </Navbar>
        </div>
        );
      }
    }