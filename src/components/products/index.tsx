import React, { useEffect, useState } from "react";
import { Card, Image, Row, Col } from "react-bootstrap";
import { useWindowSize } from "@hooks";
import NoImage from "@assets/images/no-image.png";
import Person from "@assets/images/person.png";
import Notification from "@assets/icons/bell.svg";
import Search from "@assets/icons/search.svg";
// import "./top-bar.style.scss";

const Products = (): JSX.Element => {
  const { width } = useWindowSize();

  return (
    <>
      <Card className="shadow-sm bg-body border-0">
        <Card.Body className="d-flex justify-content-between align-items-center p-2">
          {/* {width < 992 && <Image src={Logo} className="logo" alt="logo" />} */}

          <Row>
            <Col xs={12} md={3} lg={3} xl={3}>
              <Image
                src={NoImage}
                alt="sem imagem"
                className="img-fluid mx-auto d-block"
              />
            </Col>
            <Col xs={12} md={7} lg={7} xl={7}>
              <div>
                <p>Apple Watch Series 4 GPS</p>
                <p>By Apple</p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </p>
              </div>
            </Col>
            <Col xs={2} md={2} lg={2} xl={2}>
              <div>
                <p>399</p>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </>
  );
};

export { Products };
