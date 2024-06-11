import React, { useState } from "react";
import "../Styles/Login.css";
import { Container, Form, Col, Row, Button } from "react-bootstrap";
import Header from "./Header";
import { Link, useNavigate } from "react-router-dom";
import { uploadmyDocs } from "../redux/action/useravtion";
import { useDispatch } from "react-redux";

const UploadDoc = () => {

  const [docs, setDocs] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const submitHandler =async (e) => {
    e.preventDefault();
    try {
      const myForm = new FormData();
      myForm.append("title", docs);
      myForm.append("files", file);
      await dispatch(uploadmyDocs(myForm));
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPreview(fileReader.result);
    };
    fileReader.readAsDataURL(selectedFile);
  };

  return (
    <>
      <div className="full">
        <div className="card">
          <Container className="container-custom">
            <Row>
              <Col>
                <h1 className="text-center mt-2">Add Documents</h1>
                <hr />
                <Form onSubmit={submitHandler}>
                 <Form.Group>
                    <Form.Label>Type of Document</Form.Label>
                    <Form.Control
                      type="text"
                      value={docs}
                      placeholder="Type Of Document"
                      name="docs"
                      onChange={(e) => setDocs(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Add Documents</Form.Label>
                    <Form.Control type="file" onChange={handleFileChange} />
                  </Form.Group>
                  {preview && (
                    <div className="text-center">
                      <img
                        src={preview}
                        alt="Preview"
                        style={{ maxWidth: "100%", height: "10rem" }}
                      />
                    </div>
                  )}
                  <div className="d-flex justify-content-center">
                    <Button className="mt-2" type="submit">
                      Upload Documents
                    </Button>
                  </div>
                </Form>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  upload documents for User or Person?
                  <Link
                    style={{ textDecoration: "none" }}
                    to={"/addDocuments"}
                  >
                    Click here
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

export default UploadDoc;
