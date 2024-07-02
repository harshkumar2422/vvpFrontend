import React, { useState } from "react";
import "./Login.css";
import logo from "..//logo-vpvv.png";
import { useDispatch } from "react-redux";
import { login } from "../../redux/action/useravtion";
import { Row, Col, Form, Button } from "react-bootstrap"; // Importing only necessary components from Bootstrap
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div className="full">
      <img src={logo} alt="logo" />
      <div className="box">
        <Row className="justify-content-center">
          <Col xs={10} md={6} className="containeraa">
            <h1 className="text-center mt-3">Login</h1>
            <Form onSubmit={submitHandler}>
              <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  value={email}
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  value={password}
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>
              <Button className="mt-4" type="submit">
                Login
              </Button>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Login;
