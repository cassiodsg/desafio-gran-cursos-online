import React from "react";
import { Form, Image, Stack } from "react-bootstrap";
import Star from "@assets/icons/star.svg";
import StarIcon from "@assets/icons/starIcon";
import "./rating.style.scss";

const StarRating = (): JSX.Element => {
  const [rating, setRating] = React.useState(0);

  return (
    <div className="star-rating">
      <p className="rating-title">Rating</p>
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
          <button type="button" key={index} onClick={() => setRating(index)}>
            <StarIcon
              fill={index <= rating ? "#FFAB00" : "transparent"}
              stroke={index <= rating ? "#FFAB00" : "#BBBBBB"}
            />
          </button>
        );
      })}
    </div>
  );
};

export { StarRating };
