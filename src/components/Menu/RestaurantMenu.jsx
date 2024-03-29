import React from "react";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Shimmer from "../Body/Shimmer";
import { MENU_API_URL } from "../../utils/constants";
import "../../css/RestaurantMenu.css";
import { MdStars } from "react-icons/md";
import Item from "./Item";

const RestaurantMenu = () => {
  const [res, setres] = useState([]);
  const [menu, setmenu] = useState([]);
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
    setmenu(json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards);
    console.log(json?.data?.cards[2].card?.card?.info);
    console.log(json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card?.itemCards);
  };

  const {
    name,
    areaName,
    avgRating,  
    sla,
    feeDetails,
    cuisines,
    costForTwoMessage,
    totalRatingsString,

  } = res;

  return res === 0 ? (
    <Shimmer />
  ) : (
    <div className="restaurant-menu" style={{ paddingTop: 100 }}>
      <div className="links">
        <Link to="/">Home /</Link>
        <Link to="/#restro-container"> Bangalore /</Link>
        <Link to={"/restaurants/"+resId}><span> {name}</span></Link>
      </div>
      <div className="res-name">
        <h2>{name}</h2>
      </div>
      <div className="res-info-card">
        <div className="card">
          <div className="rating">
            <MdStars className="star"/>
            <p>{avgRating} ({totalRatingsString}) &nbsp;&#x2022;&nbsp; {costForTwoMessage}</p>
          </div>
          <div className="cuisines">
            <p>{cuisines?.join(", ")}</p>
          </div>
          <div className="location">
            <p>Outlet : <span>{areaName}</span></p>
            <p id="low">{sla?.slaString}</p>
          </div>
          <div className="line"></div>
          <div className="delivery">
            <p dangerouslySetInnerHTML={{ __html: feeDetails?.message }}></p>
          </div>
        </div>
      </div>
      <h2>Menu</h2>
      <div className="menu-container">
        {menu?.map((food)=>(
          <Item key={food?.card?.info?.id} itemData={food}/>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
