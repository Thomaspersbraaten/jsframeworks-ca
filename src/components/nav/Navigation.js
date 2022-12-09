import { Nav } from "react-bootstrap";

import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="nav-container">
      <Nav className="nav-bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </Nav>
    </div>
  );
}
