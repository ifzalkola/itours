import React from 'react';

import './review-card-container.scss';
import ReviewCard from '../review-card/review-card';

const ReviewCardContainer = ({ reviews }) => (
  <div className="review-card-container">
    {reviews.map(review => (
      <ReviewCard review={review} />
    ))}
  </div>
);

export default ReviewCardContainer;
