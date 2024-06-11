import React, { useEffect, useState } from "react";
import "../Styles/Login.css";
import logo from "./logo-vpvv.png";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { forgetpassword } from "../redux/action/useravtion";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Forget = () => {
  const [email, setEmail] = useState("");
  const { loading, error, message } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      dispatch(forgetpassword(email.toLowerCase()));
      toast.success("OTP sent successfully to your email");
      localStorage.setItem("resetEmail", email.toLowerCase()); // Save email to localStorage
      setTimeout(() => {
        localStorage.removeItem("resetEmail"); // Remove email from localStorage after 20 minutes
      }, 20 * 60 * 1000); // 20 minutes
      navigate("/resetPassword");
    } catch (error) {
      console.log(error);
      toast.error(error);
    }
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
      <Link to={"/"}>  <img src={logo} alt="logo" /></Link>
        <div className="card">
          <Container className="container-custom">
            <Row>
              <Col>
                <h1 className="text-center mt-2">Forget Password</h1>
                <hr />
                <Form onSubmit={submitHandler}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="email"
                      name="email"
                      required
                    />
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    <Button className="mt-2" type="submit">
                      Send Otp
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

export default Forget;
