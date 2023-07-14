import React from "react";
import { Button, Card, Form, Col } from "react-bootstrap";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <Card>
          <Card.Header className="d-flex justify-content-center">
            Login
          </Card.Header>
          <Card.Body>
            <Form>
              <Form.Group
                className="mb-3"
                as={Col}
                md="12"
                controlId="validationCustom01"
              >
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" placeholder="Email" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group
                className="mb-3"
                as={Col}
                md="12"
                controlId="validationCustom01"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" placeholder="Password" />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Button className="custom-btn" type="submit">
                Submit form
              </Button>
              <p className="d-flex justify-content-center align-items-center  text-muted ">
                Don't have account please{"  "}
                <button
                  className="link-btn ms-1"
                  onClick={() => navigate("/signUp")}
                >
                  signUp
                </button>
              </p>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
