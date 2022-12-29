import { useContext } from "react";
import { Nav, NavbarBrand, Navbar, Container } from "react-bootstrap";

import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export default function Navigation(): JSX.Element {
  const [auth, setAuth] = useContext(AuthContext);

  return (
    <Navbar expand="lg" className="nav-container">
      <Container>
        <NavLink to="/">
          <NavbarBrand>EnvPosts</NavbarBrand>
        </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav-bar">
            <NavLink to="/" className="nav-bar__link">
              Home
            </NavLink>
            <NavLink to="/contact" className="nav-bar__link">
              Contact
            </NavLink>
            {auth ? (
              <NavLink to="/admin" className="nav-bar__link">
                Admin
              </NavLink>
            ) : (
              <NavLink to="/login" className="nav-bar__link">
                Login
              </NavLink>
            )}
            <NavLink to="/favourites" className="nav-bar__link">
              Favourites
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
  // return (
  //   <div className="nav-container">
  //     <NavLink to="/">
  //       <NavbarBrand>EnvPosts</NavbarBrand>
  //     </NavLink>
  //     <Navbar.Collapse id="basic-navbar-nav">
  //       <Nav className="nav-bar">
  //         <NavLink to="/">Home</NavLink>
  //         <NavLink to="/contact">Contact</NavLink>
  //         {auth ? <NavLink to="/admin">Admin</NavLink> : <NavLink to="/login">Login</NavLink>}
  //         <NavLink to="/favourites">Favourites</NavLink>
  //       </Nav>

  //   </div>
  // );
}
