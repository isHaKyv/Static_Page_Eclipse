import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Cambiado a useNavigate
import './styles/Login.css'; 

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Cambiado a useNavigate

  const handleRegister = (e) => {
    e.preventDefault(); // Evitar el envío del formulario por defecto

    // Validar los campos antes de redirigir o enviar datos a la API
    if (!email || !password) {
      alert("Por favor, complete todos los campos.");
      return;
    }

    // Aquí puedes agregar lógica para enviar datos a la API o realizar el registro de usuario
    // Ejemplo: enviar datos a la API
    // fetch('url_de_tu_api', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ email, password }),
    // })
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log('Registro exitoso:', data);
    //     history.push("/"); // Redirigir a la página principal después del registro exitoso
    //   })
    //   .catch(error => {
    //     console.error('Error al registrar:', error);
    //     alert('Error al registrar. Por favor, inténtelo de nuevo.');
    //   });

    // Simulación de redirección después del registro exitoso
    navigate("/"); // Cambiado a useNavigate
  };

  return (
    <div className="login-wrapper">
      <div className="login-box">
        <h2>Register</h2>
        <form onSubmit={handleRegister}>
          <div className="input-box">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label>Email</label>
          </div>
          <div className="input-box">
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <label>Password</label>
          </div>
          <button type="submit" className="btn">
            Register
          </button>
          <div className="login-register">
            <p>
              Already have an account?{" "}
              <a href="#" className="register-link" onClick={() => navigate("/login")}>
                Login
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
