import React from "react";
import { Button, Card, Form, Col } from "react-bootstrap";
import "./Auth.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { axiosAuth } from "../../utils/helper";
import { toast } from "react-toastify";

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    data.Password = btoa(data.Password);
    axiosAuth("/user/create", data)
      .then((res) => {
        console.log("res", res);
      })
      .catch((error) => {
        console.log("error", error);
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card>
        <Card.Header className="d-flex justify-content-center">
          SignUp
        </Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group as={Col} md="12">
              <Form.Label>First name</Form.Label>
              <Form.Control
                className={errors.FirstName ? "border border-danger" : ""}
                type="text"
                placeholder="First name"
                {...register("FirstName", {
                  required: "Please enter first name.",
                })}
              />
              <p className="error invalid-feedback d-block ">
                <span className="text-danger">
                  <ErrorMessage errors={errors} name="FirstName" />
                </span>
              </p>
            </Form.Group>
            <Form.Group as={Col} md="12">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                className={errors.FirstName ? "border border-danger" : ""}
                type="text"
                placeholder="Last name"
                {...register("LastName", {
                  required: "Please enter last name.",
                })}
              />
              <p className="error invalid-feedback d-block  ">
                <span className="text-danger">
                  <ErrorMessage errors={errors} name="LastName" />
                </span>
              </p>
            </Form.Group>
            <Form.Group
              as={Col}
              md="12"
              // controlId="validationCustom01"
            >
              <Form.Label>Email</Form.Label>
              <Form.Control
                className={errors.FirstName ? "border border-danger" : ""}
                type="text"
                placeholder="Email"
                {...register("Email", {
                  required: "Please enter email.",
                  pattern: {
                    value:
                      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                    message: "Please enter a valid email.",
                  },
                })}
              />
              <p className="error invalid-feedback d-block ">
                <span className="text-danger">
                  <ErrorMessage errors={errors} name="Email" />
                </span>
              </p>
            </Form.Group>
            <Form.Group as={Col} md="12">
              <Form.Label>Password</Form.Label>
              <Form.Control
                className={` mb-1 ${
                  errors.FirstName ? "border border-danger" : ""
                }`}
                type="password"
                placeholder="Password"
                {...register("Password", {
                  required: "Please enter password.",
                })}
              />
              <p className="error invalid-feedback d-block">
                <span className="text-danger">
                  <ErrorMessage errors={errors} name="Password" />
                </span>
              </p>
            </Form.Group>
            <Button className="custom-btn " type="submit">
              Submit form
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
}
