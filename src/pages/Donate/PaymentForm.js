import React, { useState } from 'react';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import './PaymentForm.css';

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentStatus, setPaymentStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    // Use Stripe's test card information
    const cardElement = elements.getElement(CardElement);
    const { token, error } = await stripe.createToken(cardElement);

    if (error) {
      console.error(error.message);
      setPaymentStatus('Payment success');
    } else {
      console.log('Payment Token:', token);
      setPaymentStatus('Payment processed successfully (for testing)');
      // You can send this token to your backend for further processing
    }
  };

  return (
    <div className="donate-bg"> 
    <div className="payment-form-container">
      <h2>Donate Us</h2>
      <form onSubmit={handleSubmit} className="payment-form">
      <label htmlFor="moneyAmount">Enter your Name:</label>
        <input type='pay-name' id="name" required />

        <label htmlFor="moneyAmount">Enter your money amount:</label>
        <input className='donate-input' type='number' id="moneyAmount" required />
        <div className="card-element">
          <label htmlFor="cardElement">Card Details:</label>
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#333',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#ff4242',
                },
              },
            }}
            id="cardElement"
          />
        </div>
        <button type="submit" disabled={!stripe} className="pay-button">
          Donate Now
        </button>
      </form>
      {paymentStatus && <p className="payment-status">{paymentStatus}</p>}
    </div>
    </div>
  );
}

export default PaymentForm;
