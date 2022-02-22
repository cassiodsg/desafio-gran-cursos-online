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
} from "@components";
import { useWindowSize } from "@hooks";

const Home = (): JSX.Element => {
  const { width, height } = useWindowSize();

  return (
    <Container fluid className="home-background">
      <Row className={`${width < 992 ? "shadow-sm bg-body mb-3 rounded" : ""}`}>
        <Col xs={2} md={4} lg={3} xl={2} className="p-0 d-flex">
          <Menu />
        </Col>
        <Col xs={10} md={8} lg={9} xl={10}>
          <TopBar />

          {width >= 992 && (
            <>
              <Col>
                <BreadCrumb />
              </Col>
              <Row>
                <Col lg={3} xl={3}>
                  <p>Filters</p>
                  <Filters />
                </Col>
                <Col lg={9} xl={9}>
                  <div className="d-flex justify-content-between">
                    <p className="fs-6">100 results</p>
                    <Listing />
                  </div>
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
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};

export default Home;
