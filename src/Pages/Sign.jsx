import React from 'react';
import './Sign.css';

export const Sign = () => {
    return (
      <div className="sign-up">
        <div className="image-container">
          <img className="image" alt="Sign Up" src={require('../Assets/images/back_ground_accueil.jpg')} />
        </div>
        <div className="form-container">
          <h1>LIKE SIDE</h1>
          <form>
            <div className="input-group">
              <label htmlFor="name">Nom</label>
              <input id="name" type="text" placeholder="Entrer votre prenom" />
            </div>
            <div className="input-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" placeholder="Entrer votre email" />
            </div>
            <div className="input-group">
              <label htmlFor="password">Mot de passe</label>
              <input id="password" type="password" placeholder="Entrer votre mot de passe" />
            </div>
            <div className="terms">
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">I agree to the <a href="#">terms & policy</a></label>
            </div>
            <button type="submit">Creer un compte</button>
          </form>
          <p>ou</p>
          <p>Avez-vous un compte? <a href="LogIn">Connecter-vous</a></p>
        </div>
  </div>
    );
};

export default Sign;
