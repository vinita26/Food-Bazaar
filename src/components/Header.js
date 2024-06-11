import { useState } from "react";

const Header = () => {

    const [btnName,setBtnName] = useState('Login');
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src='https://porky.com/wp-content/uploads/2016/02/food-bazaar.jpg'></img>
            </div>
            <div className="nav-items">
                <ul className="links">
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    <button className="login" onClick={()=>btnName === 'Login' ? setBtnName('Logout'): setBtnName('Login')}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
}

export default Header;