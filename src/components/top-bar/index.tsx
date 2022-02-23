import React, { useEffect, useState } from "react";
import { Card, Image, Stack } from "react-bootstrap";
import { useWindowSize } from "@hooks";
import Logo from "@assets/images/logo.png";
import Person from "@assets/images/person.png";
import Notification from "@assets/icons/bell.svg";
import Search from "@assets/icons/search.svg";
import EmailIcon from "@assets/icons/mail.svg";
import CalendarIcon from "@assets/icons/calendar.svg";
import MessageSquareIcon from "@assets/icons/message-square.svg";
import CheckSquareIcon from "@assets/icons/check-square.svg";
import StarIcon from "@assets/icons/star.svg";
import "./top-bar.style.scss";

const TopBar = (): JSX.Element => {
  const { width } = useWindowSize();

  return (
    <>
      <Card
        className={`${
          width < 992
            ? "border-0 top-bar-position p-2"
            : "shadow-sm bg-body border-0 top-bar-position"
        }`}
      >
        <Card.Body className="d-flex justify-content-between align-items-center">
          {width < 992 && <Image src={Logo} className="logo" alt="logo" />}
          {width >= 992 && (
            <Stack direction="horizontal" gap={3}>
              <Image src={CheckSquareIcon} alt="icone de check de messagem" />
              <Image src={MessageSquareIcon} alt="icone de mensagem" />
              <Image src={EmailIcon} alt="icone de e-mail" />
              <Image src={CalendarIcon} alt="icone de calendario" />
              <Image src={StarIcon} alt="icone de estrela" />
            </Stack>
          )}

          <Stack direction="horizontal" gap={3}>
            {width >= 992 && (<p className="m-0">English</p>)}
            <Image src={Notification} alt="icone de notificação" />
            <Image src={Search} alt="icone de busca" />
            {width >= 992 && (
              <div className="d-flex align-items-center">
                <div className="top-bar-text-person">
                  <p className="m-0">Jonh Doe</p>
                  <p className="m-0">Available</p>
                </div>

                <Image
                  src={Person}
                  className="img-fluid"
                  roundedCircle
                  alt="imagem de perfil"
                />
              </div>
            )}
          </Stack>
        </Card.Body>
      </Card>
    </>
  );
};

export { TopBar };
