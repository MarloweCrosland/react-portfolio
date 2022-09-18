import React from "react";
import Nav from 'react-bootstrap/Nav';

function Navi() {

    return (
        <Nav defaultActiveKey="/about-me">
          <Nav.Item>
            <Nav.Link href="/about-me">About Me</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link href="/resume">Resume</Nav.Link>
          </Nav.Item>
        </Nav>
      );
}

export default Navi;