import React, { useState } from 'react';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nom d’utilisateur:', username);
    console.log('Mot de passe:', password);
  };

  return (
    <div className="login-container">
      <div className="image-container">
        <img src="../Assets/images/back_ground_login.jpg" alt="Background" className="image" />
      </div>

      <div className="form-container">
        <h2>Se connecter</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">
            Se connecter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
