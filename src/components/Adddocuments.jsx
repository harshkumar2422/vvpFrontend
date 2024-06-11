import React, { useState } from "react";
import "../Styles/Login.css";
import {
  Container,
  Form,
  Col,
  Row,
  Button,
  Dropdown,
  Spinner,
} from "react-bootstrap";
import { useDispatch } from "react-redux";
import { uploadDocs } from "../redux/action/useravtion";
import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

const Adddocuments = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [docs, setDocs] = useState("");
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [loading, setLoading] = useState(false);
  const [select, setSelect] = useState("select");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);

    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      setPreview(fileReader.result);
    };
    fileReader.readAsDataURL(selectedFile);
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const myForm = new FormData();
      myForm.append("type", select);
      myForm.append("name", name);
      myForm.append("email", email);
      myForm.append("title", docs);
      myForm.append("files", file);
      await dispatch(uploadDocs(myForm));
      navigate("/admin/addDocuments");
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSelect = (e) => {
    setSelect(e);
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
                    <Dropdown className="mb-2" onSelect={handleSelect}>
                      <Dropdown.Toggle variant="success" id="dropdown-basic">
                        {select}
                      </Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Dropdown.Item eventKey="User">User</Dropdown.Item>
                        <Dropdown.Item eventKey="Company">Company</Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="text"
                      value={name}
                      placeholder="name"
                      name="name"
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </Form.Group>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      placeholder="email"
                      name="email"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>
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
                    <Button className="mt-2" type="submit" disabled={loading}>
                      {loading ? (
                        <Spinner
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        "Upload Documents"
                      )}
                    </Button>
                  </div>
                </Form>
                <hr />
              </Col>
            </Row>
            <Row>
              <Col>
                <p>
                  Upload documents for company?{" "}
                  <Link style={{ textDecoration: "none" }} to="/admin/companydocs">
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

export default Adddocuments;
