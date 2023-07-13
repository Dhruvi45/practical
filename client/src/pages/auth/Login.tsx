import React, { useState } from "react";
import { Button, Card, Form, Col } from "react-bootstrap";
import "./Auth.css";

export default function Login() {
  const [isValidate, setIsValidate] = useState<boolean>(false);
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
              <Button
                className="custom-btn d-flex justify-content-end"
                type="submit"
              >
                Submit form
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
