import { useContext } from "react";
import { Nav, NavbarBrand } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navigation() {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <div className="nav-container">
      <NavLink to="/">
        <NavbarBrand>EnvPosts</NavbarBrand>
      </NavLink>

      <Nav className="nav-bar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {auth ? <NavLink to="/admin">Admin</NavLink> : <NavLink to="/login">Login</NavLink>}
        <NavLink to="/favourites">Favourites</NavLink>
      </Nav>
    </div>
  );
}
