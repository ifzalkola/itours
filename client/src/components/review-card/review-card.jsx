import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./review-card.scss";

const ReviewCard = (props) => {
  return (
    <div className="review-card">
      <div className="profile-wrapper">
        <div className="profile-photo" style={{ backgroundColor: "#ff5976" }}>
          &nbsp;
        </div>
        <span className="username">Laura H. Miguel</span>
      </div>
      <div className="review-wrapper">
        <span className="review">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex, hic?
          Illum consectetur molestias tempora architecto consequatur officia
          asperiores sunt nobis.
        </span>
        <span className="rating">
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" />
          <FontAwesomeIcon icon="star" color="#fff" />
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
