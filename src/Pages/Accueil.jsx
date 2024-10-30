import React from 'react';
import './Accueil.css';
import NavBar from '../Compenents/NavBar';
import Footer from '../Compenents/Footer';

 

function Accueil() {
    


    return(
        <div className="containair">
            <NavBar />
            <h1>RESTAURANT</h1>
            <h3>RESTAU MADE IN DRC</h3>
            <div className="search-container">
                <input type="text" placeholder='Que desirez-vous ?' />
            </div>
            <button> <div className="back-button"></div></button>
        </div>
    );

}

export default Accueil;