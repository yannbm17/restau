
import React, {useState} from 'react';
import './Menu.css';
import { imageListClasses } from '@mui/material';
import image1 from '../Assets/images/zozo.jpg'
import image2 from '../Assets/images/zozo.jpg'
import image3 from '../Assets/images/zozo.jpg'
import image4 from '../Assets/images/zozo.jpg'
import image5 from '../Assets/images/zozo.jpg'
import image6 from '../Assets/images/zozo.jpg'
import image7 from '../Assets/images/zozo.jpg'
import image8 from '../Assets/images/zozo.jpg'
import image9 from '../Assets/images/zozo.jpg'
import image10 from '../Assets/images/zozo.jpg'
import image11 from '../Assets/images/zozo.jpg'
import image12 from '../Assets/images/zozo.jpg'
import image13 from '../Assets/images/zozo.jpg'
import image14 from '../Assets/images/zozo.jpg'
import image15 from '../Assets/images/zozo.jpg'
import image16 from '../Assets/images/zozo.jpg'
import image17 from '../Assets/images/zozo.jpg'
import image18 from '../Assets/images/zozo.jpg'
import image19 from '../Assets/images/zozo.jpg'
import image20 from '../Assets/images/zozo.jpg'
import image21 from '../Assets/images/zozo.jpg'
import image22 from '../Assets/images/zozo.jpg'
import image23 from '../Assets/images/zozo.jpg'
import image24 from '../Assets/images/zozo.jpg'




const Menu = () => {
    const [cart, setCart] = useState([]);

    const dishes = [
        { name: "RIZ", description: "PLAT PRINCIPAL", price: "2.000Fc", Image: image1 },
        { name: "HARICOT", description: "PLAT PRINCIPAL", price: "1.500Fc", Image: image2 },
        { name: "SALADE", description: "DESSERT", price: "7.000FC", Image: image3 },
        { name: "SAUCE BOLONAISE", description: "ACCOMPAGNEMENT", price: "3.000Fc", Image: image4 },
        { name: "LASAGNE", description: "ENTREES", price: "400Fc", Image: image5 },
        { name: "PONDU", description: "ACCOMPAGNEMENT", price: "3.500Fc", Image: image6 },
        { name: "GATEAU AU CHOCOLAT", description: "DESSERT", price: "8.000Fc", Image: image7 },
        { name: "Foufou", description: "ACCOMPAGNEMENT", price: "500Fc", Image: image8 },
        { name: "FRETIN", description: "ACCOMPAGNEMENT", price: "15.000Fc", Image: image9 },
        { name: "POMME DE TERRE", description: "PLAT PRINCIPAL", price: "25.000Fc", Image: image10 },
        { name: "SAUCISSON", description: "ACCOMPAGNEMENT", price: "5.000Fc", Image: image11 },
        { name: "POULET MAYO", description: "ACCOMPAGNEMENT", price: "30.000Fc", Image: image12 },
        { name: "POISSON SALEE", description: "ACCOMPAGNEMENT", price: "50.000Fc", Image: image13 },
        { name: "BANANE PLANTIN", description: "PLAT PRINCIPAL", price: "10.000Fc", Image: image14 },
        { name: "BANANE PLANTIN", description: "PLAT PRINCIPAL", price: "10.000Fc", Image: image15 },
        { name: "BANANE PLANTIN", description: "PLAT PRINCIPAL", price: "10.000Fc", Image: image16 },
        { name: "BANANE PLANTIN", description: "PLAT PRINCIPAL", price: "10.000Fc", Image: image17 },
        { name: "BANANE PLANTIN", description: "PLAT PRINCIPAL", price: "10.000Fc", Image: image18 },
        { name: "BANANE PLANTIN", description: "PLAT PRINCIPAL", price: "10.000Fc", Image: image19 },
        { name: "BANANE PLANTIN", description: "PLAT PRINCIPAL", price: "10.000Fc", Image: image20 },
        { name: "BANANE PLANTIN", description: "PLAT PRINCIPAL", price: "10.000Fc", Image: image21 },
        { name: "BANANE PLANTIN", description: "PLAT PRINCIPAL", price: "10.000Fc", Image: image22 },
        { name: "BANANE PLANTIN", description: "PLAT PRINCIPAL", price: "10.000Fc", Image: image23 },
        { name: "BANANE PLANTIN", description: "PLAT PRINCIPAL", price: "10.000Fc", Image: image24 },

    ];

    const addToCart = (dish) => {
        setCart([...cart, dish]);
    };

    return (
        <div className="menu">
            <h1>Menu du Restaurant</h1>
            <div className="menu-grid">
                {dishes.map((dish, index) => (
                    <div key={index} className="dish-item">
                        <h2>{dish.name}</h2>
                        <p>{dish.description}</p>
                        <span className="price">{dish.price}</span>
                        <img src={dish.Image} alt="Images" className='dish_img'/>
                        <div className="dish_flou"></div>
                    </div>
                ))}
            </div>

            <div className="Cart">
                <h2>Mon panier</h2>
                {cart.length > 0 ?(
                    cart.map((item, index) => (
                        <div key={index} className="cart-item">
                            {item.name} - {item.price}</div>
                    ))
                ) : (
                    <p>Votre panier est vide</p>
                )}
            </div>
        </div>
    );
};

export default Menu;
