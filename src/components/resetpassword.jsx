import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "../Styles/Login.css";
import logo from "./logo-vpvv.png";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { resetPassword } from "../redux/action/useravtion";

const Reset = () => {
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const { loading, error, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const storedEmail = localStorage.getItem("resetEmail"); // Retrieve email from localStorage
  const queryParams = new URLSearchParams(location.search);
  const email = queryParams.get("email") || storedEmail; 

  console.log(email);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(resetPassword(email,otp,password,confirmpassword));
    navigate("/");
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch({ type: "clearError" });
    }
    if (message) {
      toast.success(message);
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message]);

  return (
    <>
      <div className="full">
        <img src={logo} alt="logo" />
        <div className="card">
          <Container className="container-custom">
            <Row>
              <Col>
                <h1 className="text-center mt-2">Reset Password</h1>
                <hr />
                <Form onSubmit={submitHandler}>
                  <Form.Group>
                    <Form.Label>Otp</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Otp"
                      name="text"
                      value={otp}
                      required
                      onChange={(e) => setOtp(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      name="password"
                      value={password}
                      required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      name="password"
                      value={confirmpassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    <Button className="mt-2" type="submit">
                      Reset Password
                    </Button>
                  </div>
                </Form>
                <hr />
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Reset;
