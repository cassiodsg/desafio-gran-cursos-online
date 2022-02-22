import React from "react";
import { Form, Image, Stack, Button } from "react-bootstrap";
import { useWindowSize } from "@hooks";
import GridImage from "@assets/icons/grid.svg";
import ListImage from "@assets/icons/list.svg";
import "./listing.style.scss";

const Listing = (): JSX.Element => {
  const { width } = useWindowSize();

  return (
    <>
      <div className={`d-flex justify-content-between ${width >= 992 ? "listing-wrapper" : ""}`}>
        {width >= 992 && <p className="fs-6">100 results found in 5ms</p>}

        <Stack className="listing-hstack" direction="horizontal" gap={3}>
          <Form.Select className="shadow-sm bg-body listing-select" size="sm">
            <option>Default</option>
            <option>10 itens</option>
            <option>25 itens</option>
          </Form.Select>
          <Button className="shadow-sm bg-body listing-button"><Image src={GridImage} alt="icone de grid" /></Button>
          <Button className="shadow-sm bg-body listing-button"><Image src={ListImage} alt="icone de lista" /></Button>
        </Stack>
      </div>
    </>
  );
};

export { Listing };
