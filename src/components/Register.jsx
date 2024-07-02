import React, { useState } from "react";
import "../Styles/Register.css";
import { Button, Col, Row, Form } from "react-bootstrap";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const Register = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = (event) => {
    event.preventDefault(); // Prevent form submission
    if (currentSlide < forms.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handleBack = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const navigate = useNavigate();
  const back = () => {
    navigate("/profile");
  };

  const handleAdd = () => {
    // Add your logic to submit the form here
    console.log("Form submitted for slide: ", currentSlide);
  };

  const headings = [
    "Register Company",
    "Add Directors",
    "Add Nominees",
    "Upload Documents",
    "Add Contract",
    "Payments",
  ];

  const forms = [
    <>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Company Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Company Logo</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <button className="privews" type="submit">
        Add
      </button>
    </>,
    <>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Profile Photo</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Document 1</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Document 2</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <button className="privews" type="submit">
        Add
      </button>
    </>,
    <>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Profile Photo</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Document 1</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFile" className="mb-3">
        <Form.Label>Document 2</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <button className="privews" type="submit">
        Add
      </button>
    </>,
    <>
      <Form.Group controlId="formFile1" className="mb-3">
        <Form.Label>Document 1</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <Form.Group controlId="formFile2" className="mb-3">
        <Form.Label>Document 2</Form.Label>
        <Form.Control type="file" />
      </Form.Group>
      <button className="privews" type="submit">
        Add
      </button>
    </>,
    <>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Type Of Contract</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Contact Tenure</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Contract Value</Form.Label>
          <Form.Control type="name" placeholder="Enter Name" />
        </Form.Group>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>EMD Amount</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
      </Row>
      <button className="privews" type="submit">
        Add
      </button>
    </>,
    <>
      <Form.Group controlId="formGridPhone" className="mb-3">
        <Form.Label>Payment</Form.Label>
        <Form.Control type="text" placeholder="Amount" />
      </Form.Group>
      <button className="privews" type="submit">
        Add
      </button>
    </>,
  ];

  return (
    <div className="all">
      <IoMdArrowBack className="corner-back" size={27} onClick={back} />
      <button></button>
      <div className="container">
        <h3>{headings[currentSlide]}</h3>
        <hr />

        <Form>
          <div className="slide">
            {forms[currentSlide]}
            <div className="button-group">
              {currentSlide > 0 && (
                <button className="privews" onClick={handleBack}>
                  Back
                </button>
              )}
              {currentSlide < forms.length - 1 ? (
                <button className="privews" onClick={handleNext}>
                  Next
                </button>
              ) : (
                <>
                  <button className="privews" onClick={handleBack}>
                    Back
                  </button>
                  <button className="privews" type="submit">
                    Finish
                  </button>
                </>
              )}
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Register;
