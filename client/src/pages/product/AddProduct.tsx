import React, { useState, useEffect } from "react";
import { Container, Button, Card, Row, Col, Form } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { axiosAuth, axiosGet } from "../../utils/helper";
import "../../assets/style/addProduct.css";
import { AxiosResponse } from "axios";
import { toast } from "react-toastify";

interface Product {
  Description: string;
  Image: string;
  Price: number;
  ProductId: number;
  ProductName: string;
  Quantity: number;
}
interface ApiResponse1 {
  token: string;
  data: Product;
  message: string;
  status: string;
}

export default function AddProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product>();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data: any) => {
    const selectedFile = data.Image[0];

    // Read the selected file as a data URL
    const base64String = await new Promise<string>((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result as string);
      reader.readAsDataURL(selectedFile);
    });

    // Create the file object
    const fileObject = {
      filename: selectedFile.name,
      filetype: selectedFile.type,
      data: base64String.split(",")[1],
    };

    // Update the data.Image field with the file object
    data.Image = fileObject;

    await axiosAuth<any>("/product/create", { ...data })
      .then((res: AxiosResponse<any>) => {
        console.log("res", res);
      })
      .catch((error: any) => {
        console.log("error", error);
        toast.error(error.response.data.message, {
          position: toast.POSITION.TOP_CENTER,
        });
      });
  };

  const getProduct = async () => {
    await axiosGet(`/product/${1}`).then((res: AxiosResponse<any>) => {
      setProduct(res.data);
    });
  };
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <Container>
        <Row>
          <div className="d-flex justify-content-center align-items-center vh-100 ">
            <Card className="addProduct">
              <Card.Header>
                {productId ? "Edit product" : "Add product"}
              </Card.Header>
              <Card.Body>
                <Form onSubmit={handleSubmit(onSubmit)}>
                  <Form.Group as={Col} md="12" className="d-flex">
                    <Col xs md="3">
                      <Form.Label>Product name</Form.Label>
                    </Col>
                    <Col xs md="9">
                      <Form.Control
                        className={
                          errors.ProductName ? "border border-danger" : ""
                        }
                        defaultValue={product?.ProductName}
                        type="text"
                        placeholder="Product name"
                        {...register("ProductName", {
                          required: "Please enter product name.",
                        })}
                      />
                      <p className="error invalid-feedback d-block ">
                        <span className="text-danger">
                          <ErrorMessage errors={errors} name="ProductName" />
                        </span>
                      </p>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Col} md="12" className="d-flex">
                    <Col xs md="3">
                      <Form.Label>Price</Form.Label>
                    </Col>
                    <Col xs md="9">
                      <Form.Control
                        className={errors.Price ? "border border-danger" : ""}
                        type="number"
                        placeholder="Price"
                        defaultValue={product?.Price}
                        {...register("Price", {
                          required: "Please enter price.",
                        })}
                      />
                      <p className="error invalid-feedback d-block ">
                        <span className="text-danger">
                          <ErrorMessage errors={errors} name="Price" />
                        </span>
                      </p>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Col} md="12" className="d-flex">
                    <Col xs md="3">
                      <Form.Label>Quantity</Form.Label>
                    </Col>
                    <Col xs md="9">
                      <Form.Control
                        className={
                          errors.Quantity ? "border border-danger" : ""
                        }
                        type="number"
                        placeholder="Quantity"
                        {...register("Quantity", {
                          required: "Please enter quantity.",
                        })}
                      />
                      <p className="error invalid-feedback d-block ">
                        <span className="text-danger">
                          <ErrorMessage errors={errors} name="Quantity" />
                        </span>
                      </p>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Col} md="12" className="d-flex">
                    <Col xs md="3">
                      <Form.Label>Product image</Form.Label>
                    </Col>
                    <Col xs md="9">
                      <Form.Control
                        className={errors.Image ? "border border-danger" : ""}
                        type="file"
                        placeholder="Product image"
                        {...register("Image", {
                          required: "Please enter product image.",
                        })}
                      />
                      <p className="error invalid-feedback d-block ">
                        <span className="text-danger">
                          <ErrorMessage errors={errors} name="Image" />
                        </span>
                      </p>
                    </Col>
                  </Form.Group>
                  <Form.Group as={Col} md="12" className="d-flex">
                    <Col xs md="3">
                      <Form.Label>Product Description</Form.Label>
                    </Col>
                    <Col xs md="9">
                      <Form.Control
                        className={
                          errors.Description ? "border border-danger" : ""
                        }
                        as="textarea"
                        rows={3}
                        placeholder="Product description"
                        {...register("Description", {
                          required: "Please enter product description.",
                        })}
                      />
                      <p className="error invalid-feedback d-block ">
                        <span className="text-danger">
                          <ErrorMessage errors={errors} name="Description" />
                        </span>
                      </p>
                    </Col>
                  </Form.Group>
                  <div className="d-flex justify-content-center">
                    <Button className="custom-btn" type="submit">
                      {productId ? "Edit product" : "Add product"}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
}
