import { signOut } from "firebase/auth";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../fireBase.init";
import "./Nav.css";

const Navigation = () => {
  const [user] = useAuthState(auth);
  const logOut = () => {
    signOut(auth);
  };
  return (
    <div>
      <Navbar bg="dark opacity-75" variant="dark" expand="lg" fixed="top">
        <Container>
          <Navbar.Brand href="#home" className="title">
            Car Gallery
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="link rounded-3" as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link className="link rounded-3" as={Link} to="/blog">
                Blog
              </Nav.Link>

              {user ? (
                <>
                  <Nav.Link
                    className="link rounded-3"
                    as={Link}
                    to="/manageitem"
                  >
                    Manage Items
                  </Nav.Link>
                  <Nav.Link className="link rounded-3" as={Link} to="/additem">
                    Add Item
                  </Nav.Link>
                  <Nav.Link className="link rounded-3" as={Link} to="/myitems">
                    My items
                  </Nav.Link>
                  <Nav.Link className="link rounded-3" onClick={logOut}>
                    LogOut
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link className="link rounded-3" as={Link} to="/login">
                  LogIn
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Navigation;
