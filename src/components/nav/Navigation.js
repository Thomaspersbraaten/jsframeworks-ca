import { Nav, NavbarBrand } from "react-bootstrap";

import { NavLink } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="nav-container">
      <NavLink to="/">
        <NavbarBrand>EnvPosts</NavbarBrand>
      </NavLink>

      <Nav className="nav-bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        <NavLink to="/login">Login</NavLink>
      </Nav>
    </div>
  );
}
