import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../../utils/constants";
import "../../css/RestaurantMenu.css";

const RestaurantMenu = () => {
  const [res, setres] = useState([]);
  const [menu, setmenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      MENU_API_URL+ resId
    );

    const json = await data.json();
    setres(json?.data?.cards[2]?.card?.card?.info);
    setmenu(json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards);
    console.log(json?.data?.cards[2].card?.card?.info);
    console.log(json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card?.card?.itemCards);
  };

  const {
    name,
    areaName,
    avgRating,  
    sla,
    feeDetails,
    cuisines,
    costForTwo,
    totalRatingsString,

  } = res;

  

  return res === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu" style={{ paddingTop: 100 }}>
      <h1>{name}</h1>
      <p>{areaName}</p>
      <p>{avgRating}</p>
      <p>{sla?.slaString}</p>
      <p>{feeDetails?.message}</p>
      <p>{cuisines?.join(", ")}</p>
      <p>{costForTwo}</p>
      <p>{totalRatingsString}</p> 
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
        <li>Coke</li>
      </ul>
    </div>
  );
};

export default RestaurantMenu;
