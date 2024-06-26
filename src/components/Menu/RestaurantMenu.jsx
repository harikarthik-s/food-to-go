import React, {useState} from "react";
import { useParams, Link } from "react-router-dom";
import MenuShimmer from "./MenuShimmer";
import "../../css/RestaurantMenu.css";
import { MdStars } from "react-icons/md";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const { res, categories } = useRestaurantMenu(resId);
  const [selectedIndex, setSelectedIndex] = useState(null);

  if (res == null) return <MenuShimmer />;

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

  return (
    <div className="restaurant-menu" style={{ paddingTop: 100 }}>
      <div className="links">
        <Link to="/">Home /</Link>
        <Link to="/#restro-container"> Bangalore /</Link>
        <Link to={"/restaurants/" + resId}>
          <span> {name}</span>
        </Link>
      </div>
      <div className="res-name">
        <h2>{name}</h2>
      </div>
      <div className="res-info-card">
        <div className="card">
          <div className="rating">
            <MdStars className="star" />
            <p>
              {avgRating} ({totalRatingsString}) &nbsp;&#x2022;&nbsp;{" "}
              {costForTwoMessage}
            </p>
          </div>
          <div className="cuisines">
            <p>{cuisines?.join(", ")}</p>
          </div>
          <div className="location">
            <p>
              Outlet : <span>{areaName}</span>
            </p>
            <p id="low">{sla?.slaString}</p>
          </div>
          <div className="line"></div>
          <div className="delivery">
            <p dangerouslySetInnerHTML={{ __html: feeDetails?.message }}></p>
          </div>
        </div>
      </div>
      <h3 className="menu">Menu</h3>
      <div className="menu-container">
        {categories.map((category, index) => (
          <RestaurantCategory
            data={category.card?.card}
            key={category.card?.card?.title}
            selected = {index === selectedIndex? true : false}
            setSelectedIndex = {()=>setSelectedIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
