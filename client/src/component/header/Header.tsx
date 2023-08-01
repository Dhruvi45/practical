import React from 'react'
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar" variant="dark">
    <Container>
      <Navbar.Brand href="#home">ShoupHub</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={()=> navigate("/productList")}>All Product</Nav.Link>
         
        </Nav>
        <Nav>
          <Nav.Link onClick={()=> navigate("/addProduct")}>Add Product</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}
