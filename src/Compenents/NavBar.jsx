import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/path/to/logo.png" alt="Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li><Link to="/">Accueil</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/propos">À Propos</Link></li>
          <li><Link to="/connexion">Connexion</Link></li>
          <li><Link to="/creez-un-compte">Créer un Compte</Link></li>
          <li><Link to="/mon-panier">Mon Panier</Link></li>
          <li><Link to="/mon-profil">Mon Profil</Link></li>
          <li><Link to="/evenement">Événements</Link></li>
        </ul>
      </nav>
      <div className="icons">
        <span className="cart-icon">🛒</span>
        <Link to="/connexion" className="user-icon">👤</Link> {/* Lien vers la page de connexion */}
      </div>
    </header>
  );
};

export default Header;
