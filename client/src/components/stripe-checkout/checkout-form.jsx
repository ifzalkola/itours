import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import store from '../../redux/store';
import CardSection from './card-section';
import { showAlert } from '../../redux/alert/alert-actions';
import Axios from 'axios';
import CustomButton from '../custom-button/custom-button';

import './checkout-form.scss';
import { withRouter } from 'react-router-dom';

const CheckoutForm = ({ client_email, amount, tour, history, user }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState('');
  useEffect(() => {
    async function fetchData() {
      const res = await Axios.post('/get-payment-intent', {
        amount: amount * 100
      });
      setClientSecret(res.data.client_secret);
    }
    fetchData();
  }, []);
  const handleSubmit = async e => {
    e.preventDefault();
    if (!stripe || !elements) {
      return;
    }
    store.dispatch(showAlert('Processing Payment...', 'success'));
    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: client_email
        }
      }
    });
    if (result.error) {
      store.dispatch(showAlert(result.error.message, 'error'));
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        store.dispatch(showAlert('Payment Successful', 'success'));
        history.push('/');
        await Axios.post('/api/bookings', {
          tour: tour.id,
          user: user.id,
          amount
        });
      }
    }
  };

  return (
    <React.Fragment>
      <div className="item-details">
        <img
          className="checkout-cover"
          src={`images/tours/${tour.coverPhoto}`}
          alt="tour-image"
        />
        <div className="checkout-details">
          <span>Tour: {tour.name}</span>
          <span>Price:{tour.price} INR</span>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <CardSection />
        <CustomButton disabled={!stripe}>Confirm order</CustomButton>
      </form>
    </React.Fragment>
  );
};
const mapStatetoProps = state => ({
  client_email: state.user.currentUser.email,
  amount: state.tour.tour.price,
  tour: state.tour.tour,
  user: state.user.currentUser
});
export default withRouter(connect(mapStatetoProps)(CheckoutForm));
