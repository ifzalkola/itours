import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';

import { fetchTourBySlugAsync } from '../../redux/tour/tour-actions';
import MapBox from '../../components/map/map';
import withSpinner from '../../components/withSpinner/with-spinner';

import './tour-overview.scss';
import {
  selectTour,
  selectIsTourLoaded
} from '../../redux/tour/tour-selectors';
import Axios from 'axios';
import { withRouter } from 'react-router-dom';
import ReviewCardContainer from '../../components/review-card-container/review-card-container';

const stripePromise = loadStripe(
  'pk_test_51Gu2DXAeW4SghGpCshSJeunuJYkCA7OK60gAh75ss2bYFX5oCyWpgELzRGhYlb06dCxAolYuLLLkKBnjXMgkABrz002hOxt0k1'
);

const TourDescription = ({ locations, photos }) => {
  let key = 123;
  return (
    <React.Fragment key={key++}>
      {photos.map((photo, index) => {
        return (
          <div className="tour-description" key={key++}>
            <div
              className="photo"
              style={{ backgroundImage: `url('../images/tours/${photo}')` }}
            >
              <span className="location-name">
                {locations[index].locationName}
              </span>
            </div>
            <div className="description">
              {locations[index].locationDescription}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};
const TourOverview = ({ tour, user, history }) => {
  const {
    name,
    coverPhoto,
    photos,
    locations,
    tourDescription,
    price,
    reviews
  } = tour;
  const handleCheckout = async e => {
    if (!user) {
      return history.push('/signin');
    }
    const stripe = await stripePromise;

    const response = await Axios.post('/create-checkout-session', {
      tourName: name,
      amount: price,
      email: user.email,
      photo: coverPhoto
    });

    const result = await stripe.redirectToCheckout({
      sessionId: response.data.id
    });
    if (result.error) {
      console.log('payment unsuccessful');
    }
  };
  return (
    <div className="tour-overview">
      <div className="showcase">
        <div
          className="cover-photo"
          style={{ backgroundImage: `url('../images/tours/${coverPhoto}')` }}
        >
          &nbsp;
        </div>
        <span className="tour-name">{name}</span>
      </div>
      <h2>City Description</h2>
      <div className="city-description">{tourDescription}</div>
      <h2>Places to visit</h2>
      <div className="tours-description">
        <TourDescription photos={photos} locations={locations} />
      </div>
      <MapBox locations={locations} />
      {reviews.length ? (
        <React.Fragment>
          <h2>Reviews</h2>
          <ReviewCardContainer reviews={reviews} />
        </React.Fragment>
      ) : null}
      <div className="booking-label">
        <h2>Want To Visit Exotic Places?</h2>
        <button onClick={handleCheckout}>Pay Now</button>
      </div>
    </div>
  );
};
const TourOverviewWithSpinner = withSpinner(TourOverview);
const TourOverviewPage = props => {
  useEffect(() => {
    props.fetchTourStart(props.match.params.slug);
    window.scrollTo(0, 0);
  }, []);
  return <TourOverviewWithSpinner isLoading={props.isLoading} {...props} />;
};
const mapStateToProps = (state, ownProps) => ({
  tour: selectTour(state),
  isLoading: !selectIsTourLoaded(ownProps.match.params.slug)(state),
  user: state.user.currentUser
});
const mapDispatchToProps = dispatch => ({
  fetchTourStart: slug => dispatch(fetchTourBySlugAsync(slug))
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(TourOverviewPage)
);
