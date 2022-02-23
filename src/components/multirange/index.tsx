import React from "react";
import { Form } from "react-bootstrap";
import { useWindowSize } from "@hooks";
import "./multirange.style.scss";

const Multirange = (): JSX.Element => {
  const { width } = useWindowSize();

  return (
    <>
      <p className="multirange-title mb-2">Multi Range</p>
      <Form>
        <Form.Check
          type="radio"
          id={`value-1`}
          name="multirange"
          label={`$10`}
          className="multirange-checked-full"
        />
        <Form.Check
          type="radio"
          id={`value-2`}
          name="multirange"
          label={`$10-$100`}
          className="multirange-checked-full"
        />
        <Form.Check
          type="radio"
          id={`value-3`}
          name="multirange"
          label={`$100-$500`}
          className="multirange-checked-full"
        />
        <Form.Check
          type="radio"
          id={`value-4`}
          name="multirange"
          label={`$500`}
          className="multirange-checked-full"
        />
        <Form.Check
          type="radio"
          id={`value-all`}
          name="multirange"
          label={`All`}
          className="multirange-checked-full"
        />
      </Form>
    </>
  );
};

export { Multirange };
