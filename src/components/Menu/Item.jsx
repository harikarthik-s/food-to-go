import React from "react";
import { MENU_IMG } from "../../utils/constants";
import "../../css/RestaurantMenu.css"
import { FaStar } from "react-icons/fa";

const Item= (props) => {
  const {itemData} = props;
  const {name, price, ratings, description, imageId, defaultPrice} = itemData?.card?.info;
  const {rating, ratingCountV2} = ratings?.aggregatedRating;
  return (
    <>
    <div className="item-card">
      <div className="left">
        <h3>{name}</h3>
        <p className="price">&#8377;{price/100 || defaultPrice/100}</p>
        <div className="star-rating"><FaStar className="fastar"/><p ><span>{rating}</span> ({ratingCountV2})</p></div>
        <p className="desc">{description}</p>
      </div>
      <div className="right">
        <img src={MENU_IMG+imageId} alt="item-logo" />
        <button>ADD</button>
        <p>Customisable</p>
      </div>
    </div>

    <div className="separator"></div>
    </>
  );
}

export default Item