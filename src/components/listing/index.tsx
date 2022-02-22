import React, { useEffect, useState } from "react";
import { Form, Image, Stack } from "react-bootstrap";
import { useWindowSize } from "@hooks";
// import { Multirange } from "@components";
import Home from "@assets/icons/home.svg";
// import Person from "@assets/images/person.png";
// import Notification from "@assets/icons/bell.svg";
import GridImage from "@assets/icons/grid.svg";
import ListImage from "@assets/icons/list.svg";
// import "./breadcrumb.style.scss";

const Listing = (): JSX.Element => {
  const { width } = useWindowSize();

  return (
    <>
      <Stack className="mb-3" direction="horizontal" gap={3}>
        <Form.Select size="sm">
          <option>Default</option>
          <option>10 itens</option>
          <option>25 itens</option>
        </Form.Select>
        <Image src={GridImage} alt="icone de grid" />
        <Image src={ListImage} alt="icone de lista" />
      </Stack>
    </>
  );
};

export { Listing };
