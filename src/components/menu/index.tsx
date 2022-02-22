import React, { useEffect, useState } from "react";
import {
  Container,
  Col,
  Navbar,
  Nav,
  Row,
  Offcanvas,
  Image,
  Form,
} from "react-bootstrap";
import { useWindowSize } from "@hooks";
import Logo from "@assets/images/logo.png";
import Person from "@assets/images/person.png";
// import "./menu.style.scss";

const Menu = (): JSX.Element => {
  const [show, setShow] = useState(false);
  const { width, height } = useWindowSize();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        expand="lg"
        className={`align-items-baseline ${width >= 992 ? "shadow bg-body" : ""}`}
      >
        <Container className="justify-content-around ">
          <Row>
            <Col>
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={handleShow}
                className="p-0"
              />
              {/* {width >= 992 && ( */}
              <Nav className="flex-column d-none d-lg-flex">
                <div>
                  <Image src={Logo} className="logo" />
                </div>
                <Form.Select size="sm">
                  <option>Small select</option>
                </Form.Select>
                <p>eCommerce</p>

                <p>APPS</p>
                <Nav.Link href="#home">Email</Nav.Link>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>

                <p>UI ELEMENTS</p>
                <Nav.Link href="#home">Imagem</Nav.Link>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">Features</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>
                {/* <p>
                    <code>{JSON.stringify({ width, height })}</code>
                  </p> */}
              </Nav>
              {/* )} */}
            </Col>
            <Col></Col>
          </Row>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <Image src={Person} roundedCircle />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home">Imagem</Nav.Link>
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export { Menu };
