import React, { useRef } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../fireBase.init";

const Signup = () => {
  const navigate = useNavigate();
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  //ref for input
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirmPasswordRef = useRef("");
  let errorMessage = "";
  let passWordError = "";
  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (error) {
    errorMessage = error.message;
  }
  //sign up form action
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;
    errorMessage = "";
    passWordError = "";
    if (password !== confirmPassword) {
      return;
    }
    createUserWithEmailAndPassword(email, password);
    if (user) {
      navigate("/");
    }
  };

  return (
    <div className="mt-5 h-100 pt-5">
      <h1>SignUp</h1>
      <Form className="w-50 mx-auto" onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            ref={nameRef}
            type="text"
            placeholder="Your Name"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            ref={emailRef}
            type="email"
            placeholder="Enter email"
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="confirmFormBasicPassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            ref={confirmPasswordRef}
            type="password"
            placeholder="Confirm Password"
            required
          />
        </Form.Group>
        <p className="fs-4 text-danger">{errorMessage || passWordError}</p>
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
        <Form.Text className="text-muted mt-4">
          Already have an account?<Link to="/login">Login</Link>
        </Form.Text>
      </Form>
    </div>
  );
};

export default Signup;
