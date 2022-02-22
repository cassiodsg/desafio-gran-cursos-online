import React from "react";
import { Button, Image, Stack, Breadcrumb } from "react-bootstrap";
import { useWindowSize } from "@hooks";
import { Multirange, Listing, RangeSlider, Category, StarRating } from "@components";
import Home from "@assets/icons/home.svg";
// import Person from "@assets/images/person.png";
// import Notification from "@assets/icons/bell.svg";
import ChevronsRight from "@assets/icons/chevrons-right.svg";
import Settings from "@assets/icons/settings.svg";
// import "./breadcrumb.style.scss";

const Filters = (): JSX.Element => {
  const { width } = useWindowSize();

  return (
    <>
      <div>
        {width < 992 && <Listing />}
        <Multirange />
        <hr />
        <RangeSlider
          min={0}
          max={1000}
          onChange={({ min, max }) => {return}}
        />
        <hr />
        <Category text={'Category'} />
        <hr />
        <Category text={'Brand'} />
        <hr />
        <StarRating />
        <hr />
        <Button className="w-100" variant="secondary">Clear All Filters</Button>
      </div>
    </>
  );
};

export { Filters };
