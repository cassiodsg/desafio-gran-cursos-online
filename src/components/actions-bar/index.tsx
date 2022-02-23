import React from "react";
import {
  Button,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import { useFetch } from "@hooks";
import { Filters } from "@components";

import "./actions-bar.style.scss";

const ActionsBar = (): JSX.Element => {
  const { list } = useFetch();

  const popover = (
    <Popover className="action-bar-popover" id="popover-basic">
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
        <p className="fs-6">{list.length} results found in 5ms</p>
      </div>
    </>
  );
};

export { ActionsBar };
