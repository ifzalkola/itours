import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './review-card.scss';

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <div className="profile-wrapper">
        <div
          className="profile-photo"
          style={{ backgroundImage: `url(/images/users/${review.user.photo})` }}
        >
          &nbsp;
        </div>
        <span className="username">{review.user.fullName}</span>
      </div>
      <div className="review-wrapper">
        <span className="review">{review.review}</span>
        <span className="rating">
          {[1, 2, 3, 4, 5].map((val, index) =>
            index + 1 <= review.rating ? (
              <FontAwesomeIcon icon="star" />
            ) : (
              <FontAwesomeIcon icon="star" color="#fff" />
            )
          )}
        </span>
      </div>
    </div>
  );
};

export default ReviewCard;
