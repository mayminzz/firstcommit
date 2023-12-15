import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { authenticateAction } from "../redux/actions/authenticateAction";

const Login = ({ setAuthenticate }) => {
  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const trueOK = useSelector((state) => state.auth.authenticate);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    dispatch(authenticateAction.Login(id, password));
    setAuthenticate(trueOK);
    navigate("/");
  };
  const idChange = (event) => setId(event.target.value);
  const passwordChange = (event) => setPassword(event.target.value);
  return (
    <Container className="login-area">
      <Form className="login-form" onSubmit={loginUser}>
        <Form.Group
          className="mb-3"
          controlId="formBasicEmail"
          onChange={idChange}
        >
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group
          className="mb-3"
          controlId="formBasicPassword"
          onChange={passwordChange}
        >
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
