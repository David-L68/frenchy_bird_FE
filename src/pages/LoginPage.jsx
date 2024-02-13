/* eslint-disable no-unused-vars */
import axios from "axios";
import { useState, useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate, Link } from "react-router-dom";
import "./Login.css";
import { AuthContext } from "../context/AuthProvider";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const {
    userTkn,
    setUserTkn,
    userscore,
    setUserScore,
    userNickname,
    setUserNickname,
    isAuthenticated,
    setIsAuthenticated,
  } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:8080/users/login",
        { email, password }
        // { withCredentials: true }
      );
      if (res.data.token) {
        setUserTkn(res.data.token);
        setUserNickname(res.data.nickname);
        setUserScore(res.data.score);
        localStorage.setItem("Token", res.data.token);
        localStorage.setItem("Nickname", res.data.nickname);
        localStorage.setItem("Score", res.data.score);
        setIsAuthenticated(true);
        navigate("/home");
      }
    } catch (err) {
      console.error("An error occurred during login:", err);
    }
  };
  return (
    <div id="Parent-conatainer" className="d-flex">
      {/* <div>
          <img src={bird} id="image" />
        </div> */}
      <Container id="form-container" className="d-flex flex-column px-5">
        <h3 className="d-6 font-weight-normal my-4">Login to Frenchy Bird</h3>
        <Form onSubmit={handleLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label className="font-weight-light">
              Email address:
            </Form.Label>
            <div className="inputData">
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(event) => setEmail(event.target.value)}
                value={email}
              />
            </div>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label className="font-weight-light">Password</Form.Label>
            <div className="inputData">
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(event) => setPassword(event.target.value)}
                value={password}
              />
            </div>
          </Form.Group>
          <div className="d-flex flex-row-reverse test">
            <Button variant="primary" type="submit">
              Log In
            </Button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default LoginPage;
