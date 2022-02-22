import React, { useEffect, useState, useRef } from "react";
import {
  Button,
  Image,
  Stack,
  Form,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import { useWindowSize } from "@hooks";
import { Filters, Listing } from "@components";
import Home from "@assets/icons/home.svg";
// import Person from "@assets/images/person.png";
// import Notification from "@assets/icons/bell.svg";
import GridImage from "@assets/icons/grid.svg";
import ListImage from "@assets/icons/list.svg";
import "./actions-bar.style.scss";

const ActionsBar = (): JSX.Element => {
  // const { width, height } = useWindowSize();
  // const nada = useRef<HTMLInputElement>(null);
  // const [teste, setTeste] = useState(false);

  const popover = (
    <Popover id="popover-basic">
      {/* <Popover.Header as="h3">Popover right</Popover.Header> */}
      <Popover.Body>
        <Filters />
      </Popover.Body>
    </Popover>
  );

  const Filtering = (): JSX.Element => {
    return (
      <OverlayTrigger
        trigger="click"
        rootClose
        placement="bottom"
        overlay={popover}
      >
        <Button variant="link">Filters </Button>
      </OverlayTrigger>
    );
  };

  return (
    <>
      <div className="d-flex justify-content-between align-items-baseline">
        <Filtering />
        <p className="fs-6">7,618 results found in 5ms</p>
      </div>
    </>
  );
};

export { ActionsBar };
