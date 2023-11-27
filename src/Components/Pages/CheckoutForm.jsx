// CheckoutForm.jsx
import React from 'react';
import ShippingForm from '../Organismos/ShippingForm';
import PaymentForm from '../Organismos/PaymentForm';
import '../Organismos/styles/Form.css';

const CheckoutForm = () => {
  return (
    <div className="form-container">
      <h2>Checkout</h2>
      <ShippingForm />
      <PaymentForm />
    </div>
  );
};

export default CheckoutForm;
