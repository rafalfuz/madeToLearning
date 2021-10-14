import React from "react";
import { Nav } from "react-bootstrap";
import "./nav.css";

const Navigation = () => (
  <div className="navigation">
    <Nav className="justify-content-end" activeKey="/home">
      <Nav.Item>
        <Nav.Link href="/home">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">O mnie</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Oferta</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="disabled" disabled>
          FAQ
        </Nav.Link>
      </Nav.Item>
    </Nav>
  </div>
);

export default Navigation;
