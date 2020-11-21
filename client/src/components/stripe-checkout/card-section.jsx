import React from 'react';
import { CardElement } from '@stripe/react-stripe-js';
import './card-section.scss';

const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: '#ff5976',
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: 'antialiased',
      fontSize: '20px',
      '::placeholder': {
        color: '#fddbdb'
      }
    },
    invalid: {
      color: '#fa755a',
      iconColor: '#fa755a'
    }
  }
};

function CardSection() {
  return (
    <label style={{ fontSize: '2rem' }}>
      Please Enter Your Card details
      <CardElement options={CARD_ELEMENT_OPTIONS} />
    </label>
  );
}

export default CardSection;
