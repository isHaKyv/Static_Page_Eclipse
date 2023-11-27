// PaymentForm.jsx
import React, { useState } from 'react';
import './styles/Form.css';

const PaymentForm = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para manejar los datos de la tarjeta, como enviarlos a un servidor, etc.
    console.log('Información de la tarjeta:', { cardNumber, expiryDate, cvv });
  };

  return (
    <div className="form-container">
      <h2>Información de la Tarjeta</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="cardNumber">Número de tarjeta:</label>
        <input type="text" id="cardNumber" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} required />

        <label htmlFor="expiryDate">Fecha de vencimiento:</label>
        <input type="text" id="expiryDate" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} required />

        <label htmlFor="cvv">CVV:</label>
        <input type="text" id="cvv" value={cvv} onChange={(e) => setCvv(e.target.value)} required />

        <button type="submit">Pagar</button>
      </form>
    </div>
  );
};

export default PaymentForm;
