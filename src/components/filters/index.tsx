import React from "react";
import { Button, Card } from "react-bootstrap";
import { useWindowSize } from "@hooks";
import {
  Multirange,
  Listing,
  RangeSlider,
  Category,
  StarRating,
} from "@components";
import "./filters.style.scss";

const Filters = (): JSX.Element => {
  const { width } = useWindowSize();

  return (
    <>
      <div className={`${width >= 992 ? "filters-wrapper" : ""}`}>
        {width >= 992 && <p>Filters</p>}
        <Card
          className={`${
            width < 992 ? "border-0" : "shadow-sm bg-body border-0"
          }`}
        >
          <Card.Body>
            {width < 992 && <Listing />}
            <Multirange />
            <hr />
            <RangeSlider
              min={0}
              max={1000}
              onChange={({ min, max }) => {
                return;
              }}
            />
            <hr />
            <Category text={"Category"} />
            <hr />
            <Category text={"Brand"} />
            <hr />
            <StarRating />
          </Card.Body>
        </Card>
        <Button className="w-100 mt-4" variant="secondary">
          Clear All Filters
        </Button>
      </div>
    </>
  );
};

export { Filters };
