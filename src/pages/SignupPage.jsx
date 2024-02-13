import axios from "axios";
import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignupPage = () => {
  const [lastName, setLastName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [nickname, setNickname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  // const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();

    const newUser = {
      lastName,
      firstName,
      nickname,
      email,
      password,
    };

    try {
      const res = await axios.post(
        "http://localhost:8080/users/signup",
        newUser
      );
      if (res.data.ok) {
        navigate("/");
      }
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  const checkPassword = () => {
    if (password === confPassword) {
      return true;
    } else {
      false;
    }
  };

  return (
    <Container className="d-flex flex-column signupCont">
      <Container className="my-3">
        <h3 className="font-weight-normal">Sign-Up To Frenchy Bird</h3>
      </Container>
      <Form onSubmit={handleSignUp}>
        <Form.Group className="mb-3" controlId="formBasicFirstName">
          <Form.Label className="font-weight-light">First Name:</Form.Label>
          <div className="inputData">
            <Form.Control
              type="text"
              placeholder="Your first name"
              onChange={(event) => setFirstName(event.target.value)}
              value={firstName}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicLastName">
          <Form.Label className="font-weight-light">Last Name:</Form.Label>
          <div className="inputData">
            <Form.Control
              type="text"
              placeholder="Your last name"
              onChange={(event) => setLastName(event.target.value)}
              value={lastName}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicNickname">
          <Form.Label className="font-weight-light">Nickname:</Form.Label>
          <div className="inputData">
            <Form.Control
              type="text"
              placeholder="User Nickname"
              onChange={(event) => setNickname(event.target.value)}
              value={nickname}
            />
          </div>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="font-weight-light">Email address:</Form.Label>
          <div className="inputData">
            <Form.Control
              type="email"
              placeholder="Email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label className="font-weight-light">Password:</Form.Label>
          <div className="inputData">
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="on"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
          <Form.Label className="font-weight-light">
            Confirm Password:
          </Form.Label>
          {!checkPassword() && (
            <Form.Label style={{ color: "red" }}>
              Passwords do not match
            </Form.Label>
          )}
          <div className="inputData">
            <Form.Control
              type="password"
              placeholder="Password"
              autoComplete="on"
              value={confPassword}
              onChange={(event) => setConfPassword(event.target.value)}
            />
          </div>
        </Form.Group>
        <Container className="align-self-center">
          <div className=" d-flex flex-row-reverse ">
            {checkPassword() && (
              <Button variant="primary" type="submit" className="">
                Sign Up
              </Button>
            )}
          </div>
        </Container>
      </Form>
      <h5 className="ms-5">
        Already a member ?{" "}
        <span className="">
          <Link className="" to="/login">
            Login
          </Link>
        </span>{" "}
      </h5>
    </Container>
  );
};

export default SignupPage;
