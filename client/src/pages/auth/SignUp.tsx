import React, { useState } from "react";
import { Button, Card, Form, Col } from "react-bootstrap";
import "./Auth.css";

export default function SignUp() {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
    <Card>
      <Card.Header className="d-flex justify-content-center">
        SignUp
      </Card.Header>
      <Card.Body>
        <Form>
        <Form.Group
            className="mb-3"
            as={Col}
            md="12"
            controlId="validationCustom01"
          >
            <Form.Label>Firstname</Form.Label>
            <Form.Control type="text" placeholder="Firstname" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group
            className="mb-3"
            as={Col}
            md="12"
            controlId="validationCustom01"
          >
            <Form.Label>Lastname</Form.Label>
            <Form.Control type="text" placeholder="Lastname" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
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
            className="custom-btn "
            type="submit"
          >
            Submit form
          </Button>
        </Form>
      </Card.Body>
    </Card>
  </div>
  )
}
