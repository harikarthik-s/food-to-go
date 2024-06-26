import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { API_URL, MAIN_IMG } from "../../utils/constants";
import "../../css/Body.css";
import useOnlineStatus from "../../utils/useOnlineStatus";
import UserContext from "../../utils/UserContext";

//State Variable - we use React HOOK - useState(), useEffect() - utility function given by React
// const [resList] = useState([])

const Body = () => {
  const [restoList, setrestoList] = useState([]);
  const [filteredrestoList, setfilteredrestoList] = useState([]);
  const [searchText, setsearchText] = useState("");
  //HigherOrderComponent - Takes a component and adds some functionality
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const {loggedInUser} = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(API_URL);
    const json = await data.json();

    // optional chaining
    setrestoList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredrestoList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1 style={{ textAlign: "center", marginTop: "0", paddingTop: "300px" }}>
        <span style={{ color: "red" }}>Looks like you're offline!!</span>
        <br />
        Check your Network connection{" "}
      </h1>
    );
  }

  return restoList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <img src={MAIN_IMG} alt="img" className="body-img" />
      <h1>Hey {loggedInUser}, order your food now</h1>

      <div className="search">
        <input
          type="text"
          className="search-box"
          placeholder="Search for restaurants"
          value={searchText}
          onChange={(e) => setsearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            setfilteredrestoList(
              restoList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              )
            );
          }}
        >
          <a href="#restro-container">Search</a>
        </button>
      </div>
      <div id="restro-container"></div>
      <div className="filter">
        <p>Filter:</p>
        <button
          type="button"
          className="filter-btn"
          onClick={() => {
            setfilteredrestoList(restoList);
          }}
        >
          <a href="#restro-container">All Restaurants</a>
        </button>

        <button
          type="button"
          className="filter-btn"
          onClick={() => {
            const filteredrestoList = restoList.filter(
              (restaurant) => restaurant?.info?.avgRating > 4
            );
            setfilteredrestoList(filteredrestoList);
          }}
        >
          <a href="#restro-container">Top Rated Restaurants</a>
        </button>

        <button
          type="button"
          className="filter-btn"
          onClick={() => {
            const nearrestoList = restoList.filter(
              (restaurant) => restaurant?.info?.sla?.deliveryTime < 30
            );
            setfilteredrestoList(nearrestoList);
          }}
        >
          <a href="#restro-container">Near me</a>
        </button>
      </div>

      <div className="restro-container">
        {filteredrestoList.map((restaurant, index) => (
          <Link
            to={"/restaurants/" + restaurant?.info?.id}
            key={restaurant?.info?.id}
          >
            {restaurant?.info?.aggregatedDiscountInfoV3?.header  ? (
              <RestaurantCardPromoted resData={restaurant} key={restaurant?.info?.id} />
            ) : (
              <RestaurantCard resData={restaurant} key={restaurant?.info?.id} />
            )}
            {/* <RestaurantCard resData={restaurant} /> */}
          </Link>
          // <RestaurantCard key={index} resData={restaurant} />    //using index is not recommended. <<< unique keys
        ))}
      </div>
    </div>
  );
};

export default Body;
