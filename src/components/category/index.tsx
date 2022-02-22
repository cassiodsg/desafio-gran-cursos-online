import React, { useEffect, useState } from "react";
import { Card, Image, Stack, Form } from "react-bootstrap";
import { useWindowSize } from "@hooks";
import { Multirange, Listing, RangeSlider } from "@components";
import "./category.style.scss";

const Category = (props: any): JSX.Element => {
  const { width } = useWindowSize();

  return (
    <>
      <p className="category-title mb-2">{props.text}</p>
      <Form>
        <Form.Check
          type="checkbox"
          id={`value-1`}
          name="category"
          label={`$10`}
          className="category-checked-full"
        />
        <Form.Check
          type="checkbox"
          id={`value-2`}
          name="category"
          label={`$10-$100`}
          className="category-checked-full"
        />
        <Form.Check
          type="checkbox"
          id={`value-3`}
          name="category"
          label={`$100-$500`}
          className="category-checked-full"
        />
        <Form.Check
          type="checkbox"
          id={`value-4`}
          name="category"
          label={`$500`}
          className="category-checked-full"
        />
        <Form.Check
          type="checkbox"
          id={`value-all`}
          name="category"
          label={`All`}
          className="category-checked-full"
        />
      </Form>
    </>
  );
};

export { Category };
