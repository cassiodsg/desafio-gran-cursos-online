import React from "react";
import { Form, Image, Stack } from "react-bootstrap";
import Star from "@assets/icons/star.svg";
import "./rating.style.scss";

const StarRating = (): JSX.Element => {
    const [rating, setRating] = React.useState(0);
    return (
      <div className="star-rating">
        {[...Array(5)].map((star, index) => {
          index += 1;
          return (
            <button
              type="button"
              key={index}
              className={index <= rating ? "on" : "off"}
              onClick={() => setRating(index)}
            >
              <span className="star"><Image src={Star} /></span>
            </button>
          );
        })}
      </div>
    );
  };

  export { StarRating };