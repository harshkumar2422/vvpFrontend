import React, { useState } from "react";
import "../Styles/Login.css";
import logo from "./logo-vpvv.png";
import { useDispatch } from 'react-redux';
import { login } from "../redux/action/useravtion";
import { Container, Form, Col, Row, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [select, setSelect] = useState("Select");

  const dispatch = useDispatch()


  const submitHandler = (e) => {
      e.preventDefault();
      dispatch(login(email,password,select))
  };
  const handleSelect = (e) => {
    setSelect(e);
  };
  return (
    <>
      <div className="full">
        <img src={logo} alt="logo" />
        <div className="card">
          <Container className="container-custom">
            <Row>
              <Col>
                <h1 className="text-center mt-2">Login</h1>
                <hr />
                <Form onSubmit={submitHandler}>
                  <Form.Group>
                  <Dropdown className="mb-2" onSelect={handleSelect}>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {select}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="User">User</Dropdown.Item>
                        <Dropdown.Item eventKey="Company">Company</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>

                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      placeholder="email"
                    name="email"
                    onChange={e=>setEmail(e.target.value)}
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
                      onChange={e=> setPassword(e.target.value)}
                      required
                    />
                    <Link className="list-style color" to={"/forgetPassword"}>
                      Forget password
                    </Link>
                  </Form.Group>
                  <Button className="mt-2" type="submit">
                    Login
                  </Button>
                </Form>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  New User?{" "}
                  <Link className="list-style" to={"/signup"}>
                    Signup
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

export default Login;
