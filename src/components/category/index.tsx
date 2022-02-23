import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useWindowSize, useFetch } from "@hooks";
import "./category.style.scss";

const Category = (props: any): JSX.Element => {
  const { width } = useWindowSize();
  const { categories, loading, branding } = useFetch();
  const [listCategories, setListCategories] = useState<Array<any>>([]);
  const [listBranding, setListBranding] = useState<Array<any>>([]);

  useEffect(() => {
    if (loading) return;
    setListCategories(categories);
    setListBranding(branding);
  }, [loading, categories, branding]);

  return (
    <>
      <p className="category-title mb-2">{props.text}</p>
      {props.text === "Category" && (
        <Form>
          {listCategories.map((category, index) => {
            return (
              <Form.Check
                key={category.toLowerCase().replace(/\s+/g, "")}
                type="checkbox"
                id={`category-${index}`}
                name="category"
                label={category}
                className="category-checked-full"
              />
            );
          })}
        </Form>
      )}
      {props.text === "Brand" && (
        <Form>
          {listBranding.map((brand, index) => {
            return (
              <Form.Check
                key={brand.toLowerCase().replace(/\s+/g, "")}
                type="checkbox"
                id={`brand-${index}`}
                name="branding"
                label={brand}
                className="category-checked-full"
              />
            );
          })}
        </Form>
      )}
    </>
  );
};

export { Category };
