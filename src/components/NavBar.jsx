import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "./NavBar.css";

const NavBar = () => {
  return (
    <Navbar className="nav" bg="info" data-bs-theme="light">
      <Container className="">
        <Navbar.Brand href="/">Home Page</Navbar.Brand>
        <Nav className="me-auto">
          <Button className="mx-3" href="/signup" variant="danger">
            Sign Up
          </Button>
          <Button href="/login" variant="danger">
            Login
          </Button>
          <Button className="mx-3" href="/play" variant="danger">
            Play Frenchy-Bird
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
