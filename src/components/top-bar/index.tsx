import React, { useEffect, useState } from "react";
import { Card, Image, Stack } from "react-bootstrap";
import { useWindowSize } from "@hooks";
import Logo from "@assets/images/logo.png";
import Person from "@assets/images/person.png";
import Notification from "@assets/icons/bell.svg";
import Search from "@assets/icons/search.svg";
import "./top-bar.style.scss";

const TopBar = (): JSX.Element => {
  const { width } = useWindowSize();

  return (
    <>
      <Card className={`${width < 992 ? "border-0 top-bar-position p-2" : "shadow-sm bg-body border-0 top-bar-position"}`}>
        <Card.Body className="d-flex justify-content-between align-items-center p-2">
          {width < 992 && <Image src={Logo} className="logo" alt="logo" />}

          <Stack direction="horizontal" gap={3}>
            <Image src={Notification} alt="icone de notificação" />
            <Image src={Search} alt="icone de busca" />
            {width >= 992 && (
              <Image src={Person} roundedCircle alt="imagem de perfil" />
            )}
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
};

export { TopBar };
