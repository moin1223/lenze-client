import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardFrom from './SimpleCardFrom.js';




const stripePromise = loadStripe('pk_test_51J4Uq8GxaAhS10aD0dAEKlMqfYZeYi6m2xW2IJTArb0Doi8U8Z6O7YOBv7K9MmrCBaLQrsLQoyXQzO4W25JZJp6o00JWFSycwo');

const ProcessPayment = () => {
    return (
        <Elements stripe={stripePromise}>
 <SimpleCardFrom></SimpleCardFrom>      
  
    </Elements>
    );
};

export default ProcessPayment;