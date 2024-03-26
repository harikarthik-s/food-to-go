import { LOGO_URL } from "../utils/constants";
import {useState} from "react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <button className="login-btn" onClick={()=>{
            // btnName = "Log Out";
            setbtnName("Log out")
          }}>{btnName}</button>
        </ul>
      </div>
    </div>
  );
};

export default Header;