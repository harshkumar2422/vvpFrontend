import React, { useState } from "react";
import "../Styles/Login.css";
import logo from "./logo-vpvv.png";

import { Container, Form, Col, Row, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { register } from "../redux/action/useravtion";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("Type");


  const dispatch = useDispatch();

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register(name, email, password,type));
  };
  const handleSelect = (e) => {
    setType(e);
  };
  return (
    <>
      <div className="full">
        <img src={logo} alt="logo" />
        <div className="card">
          <Container className="container-custom">
            <Row>
              <Col>
                <h1 className="text-center mt-2">Signup</h1>
                <hr />
                <Form onSubmit={submitHandler}>
                  <Form.Group>
                  <Dropdown className="mb-2" onSelect={handleSelect}>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {type}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="User">User</Dropdown.Item>
                        <Dropdown.Item eventKey="Company">Company</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Form.Label>Name or Company Name</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Name"
                      value={name}
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email or Company email</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Name"
                      value={email}
                      name="name"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="Password"
                      placeholder="Password"
                      value={password}
                      name="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Button className="mt-2" type="submit">
                    Signup
                  </Button>
                </Form>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Already a User?{" "}
                  <Link className="list-style" to={"/"}>
                    login
                  </Link>
                </p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Signup;
