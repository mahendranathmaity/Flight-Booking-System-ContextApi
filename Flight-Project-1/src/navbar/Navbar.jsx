import React from "react";
import Btn from "./Button";
import { useNavigate } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
function Navbars() {
  const navigate = useNavigate();

  const goTo = (path) => {
    navigate(path);
  };

  const gotoSignUp = () => {
    goTo("/signup-page");
  };
  const goToLogin = () => {
    goTo("/login-page");
  };
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">Hello, Guest
          </Navbar.Brand>
          <Form className="d-flex">
            <Btn variant="outline-success" value="Sign Up" funcName={gotoSignUp} />
            <Btn variant="outline-success" value="Login" funcName={goToLogin} />
          </Form>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars;
