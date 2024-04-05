import { LOGO_URL } from "../../utils/constants";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

export const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const {loggedInUser, cartItems } = useContext(UserContext);

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <p>Food To Go</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              // btnName = "Log Out";
              btnName === "Login" ? setbtnName(loggedInUser) : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="online-status">
            {useOnlineStatus() == true ? "🟢" : "🔴"}
            <span>{cartItems}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
