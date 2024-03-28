import { CDN_URL } from "../../utils/constants";
import { FaStar } from "react-icons/fa";
import "../../css/Body.css";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, cloudinaryImageId, sla } =
    resData?.info;

  return (
    <div className="res-card" style={{ color: "black" }}>
      <img
        className="res-logo"
        src={
          CDN_URL +
          cloudinaryImageId
        }
        alt="res-logo"
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} <FaStar /> &#x2022; {sla?.deliveryTime}mins</h4>
    </div>
  );
};

export default RestaurantCard;