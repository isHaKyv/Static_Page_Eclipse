// ShippingForm.jsx
import React, { useState } from 'react';
import './styles/Form.css';

const ShippingForm = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar lógica para manejar los datos, como enviarlos a un servidor, etc.
    console.log('Datos de envío:', { name, address, phone, email });
  };

  return (
    <div className="form-container">
      <h2>Datos de Envío</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre completo:</label>
        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />

        <label htmlFor="address">Dirección de envío:</label>
        <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} required />

        <label htmlFor="phone">Número de teléfono:</label>
        <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />

        <label htmlFor="email">Correo electrónico:</label>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default ShippingForm;
