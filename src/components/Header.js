import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {

    const [btnNameReact,setBtnNameReact] = useState('Login');
    const onlineStatus = useOnlineStatus();
    return (
        <div className="flex justify-between bg-pink-100">
            <div className="logo-container shadow-sm">
                <img className="w-32" src='https://porky.com/wp-content/uploads/2016/02/food-bazaar.jpg'></img>
            </div>
            <div className="nav-items  self-center">
              <ul className="flex p-4 m-4">
                <li className="px-4">
                  Online Status: {onlineStatus ? '🟢' : '🔴'}
                </li>
                <li className="px-4">
                  <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                  <Link to="/about">About Us</Link>
                </li>
                <li className="px-4">
                  <Link to="/contact">Contact Us</Link>
                </li>
                <li className="px-4">
                  <Link to="/grocery">Grocery</Link>
                </li>
                <button
                  className="login"
                  onClick={() => {
                    btnNameReact === "Login"
                      ? setBtnNameReact("Logout")
                      : setBtnNameReact("Login");
                  }}
                >
                  {btnNameReact}
                </button>
                </ul>
            </div>
        </div>
    )
}

export default Header;