import React, { useRef } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../fireBase.init";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  //getting email and password
  const emailRef = useRef("");
  const passwordRef = useRef("");

  //sending error message
  let errorMessage = "";
  if (error || googleError) {
    errorMessage = error.message || googleError.message;
  }

  if (loading) {
    return (
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  //processing login
  const handleLogin = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
    const data = { email };
    fetch("https://sleepy-crag-16124.herokuapp.com/getToken", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem("accessToken", data.accessToken);
      });
    errorMessage = "";
  };
  if (user || googleUser) {
    navigate(from, { replace: true });
  }

  return (
    <div className="mt-5 h-100 pt-5">
      <h1>Login</h1>
      <Form className="w-50 mx-auto" onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control ref={emailRef} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            ref={passwordRef}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <p className="fs-4 text-danger">{errorMessage}</p>
        <Button variant="primary" type="submit" className="w-100">
          Submit
        </Button>
        <Form.Text className="text-muted mt-4">
          Don't have an account?<Link to="/signup">Signup</Link>
        </Form.Text>
      </Form>
      <div className="w-50 mx-auto my-4 d-flex justify-content-center align-items-center">
        <div className="border-bottom border-dark w-100"></div>
        <div className="px-4">or</div>
        <div className="border-bottom border-dark w-100"></div>
      </div>
      <div>
        <Button className="w-50 my-3 " onClick={() => signInWithGoogle()}>
          {" "}
          <span>
            <img
              src="https://i.ibb.co/pzYCXPv/Background-5.png"
              alt=""
              width="16px"
            />
          </span>{" "}
          Google
        </Button>
      </div>
    </div>
  );
};

export default Login;
