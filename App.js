import React from "react";
import ReactDOM from "react-dom";

/*
 * Header
 *   - Logo
 *   - Nav Items
 *   - cart
 * Body
 *   - Search
 *   - RestaurantContainer
 *      - Restaurant Cards
 *        - Img
 *        - Name of Res,Star rating,cusine, delivery time
 * Footer
 *   - Copyright
 *   - Links
 *   - Address
 *   - Contact
 *
 */

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://tse3.mm.bing.net/th/id/OIG4.I6Iys9E8eDT8jU1WYP4r?pid=ImgGn"
        />
        <p>Food To Go</p>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = () => {
  return (
    <div className="res-card" style={{ color: "black" }}>
      <img
        className="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/b58sysfvskincfwmgoqd"
        alt="res-logo"
      />
      <h3>California Burrito</h3>
      <h4>Mexican, American, Salads, Continental, Keto, Healthy Food</h4>
      <h4>4.6 stars</h4>
      <h4>38 mins</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="restro-container">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
