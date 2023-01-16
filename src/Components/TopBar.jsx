import React, { useState, useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import icon from "../Assets/icon.png";
import { Link } from "react-router-dom";
import { env } from "../config";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext from "../UserContext";
const Topbar = () => {
  let navigate = useNavigate();
  const { user, setUser, admin, setAdmin, userName, setCartData } =
    useContext(UserContext);

  let userDelete = async () => {
    try {
      let response = await axios.delete(`${env.api}/temp`);
    } catch (e) {
      console.log(e);
    }
  };

  const logout = () => {
    userDelete();
    setUser(null);
    setAdmin(false);
    navigate("/");
    setCartData([]);
    window.localStorage.clear();
  };
  return (
    <>
      <Navbar
        className="p-4"
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
      >
        <Container>
          <img style={{ width: "100px" }} src={icon} alt={icon} />
          <Navbar.Brand style={{ fontSize: "1.3rem" }} href="/">
            EQUP-HUNTERS
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" style={{ fontSize: "1.1rem" }}>
              <Nav.Link as={Link} to="/equipment">
                Hire Equipments
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact US
              </Nav.Link>
            </Nav>
            <Nav>
              {!window.localStorage.getItem("app-token") ? (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              ) : (
                ""
              )}
              {!window.localStorage.getItem("app-token") ? (
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
              ) : (
                ""
              )}
              {window.localStorage.getItem("app-token") ? (
                <Nav.Link>
                  <b>
                    Welcome <br />
                    <div className="px-3">
                      {window.localStorage.getItem("user")}
                    </div>
                  </b>
                </Nav.Link>
              ) : (
                ""
              )}
              {window.localStorage.getItem("app-token") &&
              window.localStorage.getItem("Admin") ? (
                <Nav.Link className="m-auto" as={Link} to="/admin">
                  Admin Access
                </Nav.Link>
              ) : (
                ""
              )}
              {window.localStorage.getItem("app-token") ? (
                <Nav.Link className="m-auto" as={Link} to="/cart">
                  View Cart
                </Nav.Link>
              ) : (
                ""
              )}
              {window.localStorage.getItem("app-token") ? (
                <Nav.Link className="m-auto" onClick={logout}>
                  Log Out
                </Nav.Link>
              ) : (
                ""
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Topbar;
