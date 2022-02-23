import React from "react";
import { Card, Image, Stack } from "react-bootstrap";
import { useWindowSize } from "@hooks";
import Home from "@assets/icons/home.svg";
import ChevronsRight from "@assets/icons/chevrons-right.svg";
import Settings from "@assets/icons/settings.svg";
import "./breadcrumb.style.scss";

const BreadCrumb = (): JSX.Element => {
  const { width } = useWindowSize();

  return (
    <>
      <Card className="border-0 breadcrumb-wrapper">
        <Card.Body className="d-flex justify-content-between p-0">
          <Stack direction="horizontal" gap={2}>
            <p className="breadcrumb-text-title fs-4 d-none d-md-block">
              Card Actions
            </p>
            <Image src={Home} alt="icone da home" className="ms-2" />
            <Image src={ChevronsRight} alt="icone de chevrons" />
            <p className="breadcrumb-text-links fs-6">eCommerce</p>
            <Image src={ChevronsRight} alt="icone de chevrons" />
            <p className="breadcrumb-text-links fs-6">Electronics</p>
          </Stack>
          <div className="breadcrumb-settings">
            <Image src={Settings} alt="icone de configuração" roundedCircle />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export { BreadCrumb };
