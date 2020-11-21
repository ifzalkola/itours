import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

import CheckoutForm from './checkout-form';

const stripePromise = loadStripe(
  'pk_test_51Gu2DXAeW4SghGpCshSJeunuJYkCA7OK60gAh75ss2bYFX5oCyWpgELzRGhYlb06dCxAolYuLLLkKBnjXMgkABrz002hOxt0k1'
);

const StripeCheckout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};
export default StripeCheckout;
