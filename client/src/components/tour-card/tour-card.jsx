import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';

import './tour-card.scss';

const TourCard = ({
  name,
  price,
  duration,
  coverPhoto,
  locations,
  history,
  slug
}) => {
  return (
    <div className="card">
      <div className="card-side card-front">
        <div
          className="img-container"
          style={{
            backgroundImage: `url('./images/tours/${coverPhoto}')`
          }}
        >
          &nbsp;
        </div>
        <h4>
          <span>{name}</span>
        </h4>
        <div className="details">
          <div className="detail">
            <span>
              <FontAwesomeIcon icon="map-marked" />
              &nbsp;
              {locations[0].locationName}
            </span>
            <span>
              <FontAwesomeIcon icon="clock" /> {duration} days
            </span>
          </div>
          <div className="detail">
            <span>
              <FontAwesomeIcon icon="star" /> 4.5
            </span>
            <span>
              <FontAwesomeIcon icon="rupee-sign" /> {price}
            </span>
          </div>
        </div>
      </div>
      <div className="card-side card-back">
        <button className="btn" onClick={() => history.push(`/tours/${slug}`)}>
          Book Now
        </button>
      </div>
    </div>
  );
};
export default withRouter(TourCard);
