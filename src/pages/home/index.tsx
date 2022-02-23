import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Menu,
  TopBar,
  BreadCrumb,
  ActionsBar,
  Filters,
  Listing,
  SearchBar,
  Products,
} from "@components";
import { useWindowSize } from "@hooks";

const Home = (): JSX.Element => {
  const { width, height } = useWindowSize();

  return (
    <Container fluid className={`home-background ${width >= 992 ? "vh-100" : ""}`}>
      <Row className={`${width < 992 ? "shadow-sm bg-body mb-3 rounded" : "h-100"}`}>
        <Col xs={2} md={3} lg={3} xl={2} className="p-0 d-flex">
          <Menu />
        </Col>
        <Col xs={10} md={9} lg={9} xl={10}>
          <TopBar />

          {width >= 992 && (
            <>
              <Col>
                <BreadCrumb />
              </Col>
              <Row className="home-background">
                <Col lg={4} xl={3}>
                  <Filters />
                </Col>
                <Col lg={8} xl={9}>
                  <Listing />
                  <SearchBar />
                  <Products />
                </Col>
              </Row>
            </>
          )}
        </Col>
      </Row>
      {width < 992 && (
        <>
          <Row>
            <Col>
              <BreadCrumb />
              <hr />
            </Col>
          </Row>
          <Row>
            <Col>
              <ActionsBar />
              <SearchBar />
              <Products />
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Home;
