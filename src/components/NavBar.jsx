/* eslint-disable no-unused-vars */
import Container from "react-bootstrap/Container";
import { useContext } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import { NavLink } from "react-router-dom";
// import axios from "axios";
import Button from "react-bootstrap/Button";
import { AuthContext } from "../context/AuthProvider";
import "./NavBar.css";

const NavBar = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate;
  const handleLogOut = async () => {
    setIsAuthenticated(false);
    localStorage.clear();
    navigate("/");
  };
  return (
    <Navbar className="nav rounded" bg="secondary" data-bs-theme="light">
      <Container className="">
        <Navbar.Brand className="text-bg-secondary" href="/">
          Home Page
        </Navbar.Brand>
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
          <Button className="me-3" href="/scores" variant="danger">
            High Scores
          </Button>
          <Button
            onClick={handleLogOut}
            className="mx-5"
            href="/play"
            variant="success"
          >
            Log out
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
