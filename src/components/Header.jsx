import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../redux/action/useravtion";
import logo from "./logo-vpvv.png";
import "../Styles/Header.css";

const Header = ({ user }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#">
          <img src={logo} alt="logo" width={"50px"} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user && user.role === "admin" && (
              <>
                <Nav.Link as={Link} to="/admin/Users">
                  Users
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/company">
                  Company
                </Nav.Link>
                <Nav.Link as={Link} to="/admin/addDocuments">
                  Add documents
                </Nav.Link>
              </>
            )}
         
         {user && user.role === "user" && (
              <Nav.Link as={Link} to="/uploaddocument">
                uploadDoc
              </Nav.Link>
            )}

            <Nav.Link as={Link} to="/profile">
              My account
            </Nav.Link>
            <button className="rounded" onClick={logoutHandler}>
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
