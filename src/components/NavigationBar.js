import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark" expand="lg">
      <div className="container">
        <Navbar.Brand>
          <Link to="/" style={{color:'white', textDecoration:'none' }}>ReactFootballClub</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <a href="https://github.com/fitra90/react-football-club" target="_blank">
              <Button variant="warning">
                <FaGithub style={{ marginBottom: 3 }} /> GitHub
              </Button>
            </a>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default NavigationBar;
