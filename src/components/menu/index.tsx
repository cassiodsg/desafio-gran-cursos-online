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
  Stack,
} from "react-bootstrap";
import { useWindowSize } from "@hooks";
import ArchiveIcon from "@assets/icons/archive.svg";
import CalendarIcon from "@assets/icons/calendar.svg";
import CircleIcon from "@assets/icons/circle.svg";
import CheckCircleIcon from "@assets/icons/check-circle.svg";
import CheckSquareIcon from "@assets/icons/check-square.svg";
import ChevronDownIcon from "@assets/icons/chevron-down.svg";
import CopyIcon from "@assets/icons/copy.svg";
import CreditCardIcon from "@assets/icons/credit-card.svg";
import DropletIcon from "@assets/icons/droplet.svg";
import EmailIcon from "@assets/icons/mail.svg";
import FileTextIcon from "@assets/icons/file-text.svg";
import GridIcon from "@assets/icons/grid.svg";
import HomeIcon from "@assets/icons/home.svg";
import LayoutIcon from "@assets/icons/layout.svg";
import Logo from "@assets/images/logo.png";
import MessageSquareIcon from "@assets/icons/message-square.svg";
import Person from "@assets/images/person.png";
import RightArrowIcon from "@assets/icons/right-arrow.svg";
import SidebarIcon from "@assets/icons/sidebar.svg";
import StarIcon from "@assets/icons/star.svg";

const Menu = (): JSX.Element => {
  const [show, setShow] = useState(false);
  const { width } = useWindowSize();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar
        expand="lg"
        className={`w-100  menu-wrapper ${
          width >= 992
            ? "shadow bg-body align-items-baseline"
            : "align-items-center"
        }`}
      >
        <Container className="justify-content-around ">
          <Row>
            <Col className="p-0">
              <Navbar.Toggle
                aria-controls="responsive-navbar-nav"
                onClick={handleShow}
                className="p-0"
              />
              <Nav className="flex-column d-none d-lg-flex">
                <div className="menu-logo">
                  <Image src={Logo} className="logo" />
                </div>
                <Stack className="menu-group menu-top" gap={2}>
                  <Nav.Link className="d-flex justify-content-between align-items-baseline menu-item">
                    <div>
                      <Image
                        className="menu-image"
                        src={HomeIcon}
                        alt="icone de copia"
                      />
                      Dashboard
                    </div>
                    <Image
                      className="menu-image-arrow"
                      src={ChevronDownIcon}
                      alt="icone de seta"
                    />
                  </Nav.Link>
                  <span>
                    <Image
                      className="menu-image"
                      src={CircleIcon}
                      alt="icone de circulo"
                    />
                    eCommerce
                  </span>
                </Stack>
                <div className="menu-group">
                  <p>APPS</p>
                  <Nav.Link>
                    <Image
                      className="menu-image"
                      src={EmailIcon}
                      alt="icone de email"
                    />
                    Email
                  </Nav.Link>
                  <Nav.Link>
                    <Image
                      className="menu-image"
                      src={MessageSquareIcon}
                      alt="icone de mensagem"
                    />
                    Chat
                  </Nav.Link>
                  <Nav.Link>
                    <Image
                      className="menu-image"
                      src={CheckSquareIcon}
                      alt="icone de checagem"
                    />
                    Todo
                  </Nav.Link>
                  <Nav.Link>
                    <Image
                      className="menu-image"
                      src={CalendarIcon}
                      alt="icone de calendario"
                    />
                    Calendar
                  </Nav.Link>
                </div>
                <div className="menu-group">
                  <p>UI ELEMENTS</p>
                  <Nav.Link className="d-flex justify-content-between align-items-baseline">
                    <div>
                      <Image
                        className="menu-image"
                        src={LayoutIcon}
                        alt="icone de layout"
                      />
                      Grid
                    </div>
                    <Image
                      className="menu-image-arrow"
                      src={RightArrowIcon}
                      alt="icone de seta"
                    />
                  </Nav.Link>
                  <Nav.Link>
                    <Image
                      className="menu-image"
                      src={DropletIcon}
                      alt="icone de droplet"
                    />
                    Colors
                  </Nav.Link>
                  <Nav.Link className="d-flex justify-content-between align-items-baseline">
                    <div>
                      <Image
                        className="menu-image"
                        src={CreditCardIcon}
                        alt="icone de cartao"
                      />
                      Card
                    </div>
                    <Image
                      className="menu-image-arrow"
                      src={RightArrowIcon}
                      alt="icone de seta"
                    />
                  </Nav.Link>
                  <Nav.Link>
                    <Image
                      className="menu-image"
                      src={GridIcon}
                      alt="icone de gride"
                    />
                    Table
                  </Nav.Link>
                  <Nav.Link className="d-flex justify-content-between align-items-baseline">
                    <div>
                      <Image
                        className="menu-image"
                        src={ArchiveIcon}
                        alt="icone de arquivo"
                      />
                      Components
                    </div>
                    <Image
                      className="menu-image-arrow"
                      src={RightArrowIcon}
                      alt="icone de seta"
                    />
                  </Nav.Link>
                </div>
                <div className="menu-group">
                  <p>FORMS</p>
                  <Nav.Link className="d-flex justify-content-between align-items-baseline">
                    <div>
                      <Image
                        className="menu-image"
                        src={CopyIcon}
                        alt="icone de copia"
                      />
                      Forms Elements
                    </div>
                    <Image
                      className="menu-image-arrow"
                      src={RightArrowIcon}
                      alt="icone de seta"
                    />
                  </Nav.Link>
                  <Nav.Link>
                    <Image
                      className="menu-image"
                      src={SidebarIcon}
                      alt="icone de sidebar"
                    />
                    Forms Layouts
                  </Nav.Link>
                  <Nav.Link>
                    <Image
                      className="menu-image"
                      src={FileTextIcon}
                      alt="icone de arquivo de texto"
                    />
                    Forms Wizard
                  </Nav.Link>
                  <Nav.Link>
                    <Image
                      className="menu-image"
                      src={CheckCircleIcon}
                      alt="icone de checagem"
                    />
                    Forms Validation
                  </Nav.Link>
                </div>
              </Nav>
            </Col>
          </Row>
        </Container>
      </Navbar>

      {/* Mobile */}
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            <div className="d-flex align-items-center">
              <Image src={Person} roundedCircle />
              <div className="menu-person">
                <p className="m-0">Jonh Doe</p>
                <p className="m-0">Available</p>
              </div>
            </div>

            <Stack className="mt-2" direction="horizontal" gap={3}>
              <Image src={CheckSquareIcon} alt="icone de check de messagem" />
              <Image src={MessageSquareIcon} alt="icone de mensagem" />
              <Image src={EmailIcon} alt="icone de e-mail" />
              <Image src={CalendarIcon} alt="icone de calendario" />
              <Image src={StarIcon} alt="icone de estrela" />
            </Stack>
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Stack className="menu-group menu-top" gap={2}>
              <Nav.Link className="d-flex justify-content-between align-items-baseline menu-item">
                <div>
                  <Image
                    className="menu-image"
                    src={HomeIcon}
                    alt="icone de copia"
                  />
                  Dashboard
                </div>
                <Image
                  className="menu-image-arrow"
                  src={ChevronDownIcon}
                  alt="icone de seta"
                />
              </Nav.Link>
              <span>
                <Image
                  className="menu-image"
                  src={CircleIcon}
                  alt="icone de circulo"
                />
                eCommerce
              </span>
            </Stack>
            <div className="menu-group">
              <p>APPS</p>
              <Nav.Link>
                <Image
                  className="menu-image"
                  src={EmailIcon}
                  alt="icone de email"
                />
                Email
              </Nav.Link>
              <Nav.Link>
                <Image
                  className="menu-image"
                  src={MessageSquareIcon}
                  alt="icone de mensagem"
                />
                Chat
              </Nav.Link>
              <Nav.Link>
                <Image
                  className="menu-image"
                  src={CheckSquareIcon}
                  alt="icone de checagem"
                />
                Todo
              </Nav.Link>
              <Nav.Link>
                <Image
                  className="menu-image"
                  src={CalendarIcon}
                  alt="icone de calendario"
                />
                Calendar
              </Nav.Link>
            </div>
            <div className="menu-group">
              <p>UI ELEMENTS</p>
              <Nav.Link className="d-flex justify-content-between align-items-baseline">
                <div>
                  <Image
                    className="menu-image"
                    src={LayoutIcon}
                    alt="icone de layout"
                  />
                  Grid
                </div>
                <Image
                  className="menu-image-arrow"
                  src={RightArrowIcon}
                  alt="icone de seta"
                />
              </Nav.Link>
              <Nav.Link>
                <Image
                  className="menu-image"
                  src={DropletIcon}
                  alt="icone de droplet"
                />
                Colors
              </Nav.Link>
              <Nav.Link className="d-flex justify-content-between align-items-baseline">
                <div>
                  <Image
                    className="menu-image"
                    src={CreditCardIcon}
                    alt="icone de cartao"
                  />
                  Card
                </div>
                <Image
                  className="menu-image-arrow"
                  src={RightArrowIcon}
                  alt="icone de seta"
                />
              </Nav.Link>
              <Nav.Link>
                <Image
                  className="menu-image"
                  src={GridIcon}
                  alt="icone de gride"
                />
                Table
              </Nav.Link>
              <Nav.Link className="d-flex justify-content-between align-items-baseline">
                <div>
                  <Image
                    className="menu-image"
                    src={ArchiveIcon}
                    alt="icone de arquivo"
                  />
                  Components
                </div>
                <Image
                  className="menu-image-arrow"
                  src={RightArrowIcon}
                  alt="icone de seta"
                />
              </Nav.Link>
            </div>
            <div className="menu-group">
              <p>FORMS</p>
              <Nav.Link className="d-flex justify-content-between align-items-baseline">
                <div>
                  <Image
                    className="menu-image"
                    src={CopyIcon}
                    alt="icone de copia"
                  />
                  Forms Elements
                </div>
                <Image
                  className="menu-image-arrow"
                  src={RightArrowIcon}
                  alt="icone de seta"
                />
              </Nav.Link>
              <Nav.Link>
                <Image
                  className="menu-image"
                  src={SidebarIcon}
                  alt="icone de sidebar"
                />
                Forms Layouts
              </Nav.Link>
              <Nav.Link>
                <Image
                  className="menu-image"
                  src={FileTextIcon}
                  alt="icone de arquivo de texto"
                />
                Forms Wizard
              </Nav.Link>
              <Nav.Link>
                <Image
                  className="menu-image"
                  src={CheckCircleIcon}
                  alt="icone de checagem"
                />
                Forms Validation
              </Nav.Link>
            </div>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export { Menu };
