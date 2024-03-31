import { LOGO_URL } from "../../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../../css/Header.css";
import useOnlineStatus from "../../utils/useOnlineStatus";

export const Header = () => {
  // let btnName = "Login";

  const [btnName, setbtnName] = useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
        <p>Food To Go</p>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <button
            className="login-btn"
            onClick={() => {
              // btnName = "Log Out";
              btnName === "Login" ? setbtnName("Log out") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="online-status">{useOnlineStatus() == true? "🟢" : "🔴"}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
