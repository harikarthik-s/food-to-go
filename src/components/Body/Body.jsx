import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import Shimmer from "./Shimmer";
import { API_URL, MAIN_IMG } from "../../utils/constants";
import "../../css/Body.css";

//State Variable - we use React HOOK - useState(), useEffect() - utility function given by React
// const [resList] = useState([])

const Body = () => {
  const [restoList, setrestoList] = useState([]);
  const [filteredrestoList, setfilteredrestoList] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(`${API_URL}`);
    const json = await data.json();

    // optional chaining
    setrestoList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredrestoList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log("Body Rendered");
  };

  //Conditional Rendering
  // if (restoList.length === 0) {
  //   return <Shimmer />
  // }

  //Conditional Rendering
  return filteredrestoList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <img src={MAIN_IMG} alt="img" className="body-img" />
      <h1>Order your food</h1>

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
          <a href="#restro-container">
          Search
          </a>
        </button>
      </div>

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

      <div className="restro-container" id="restro-container">
        {filteredrestoList.map((restaurant, index) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          // <RestaurantCard key={index} resData={restaurant} />    //using index is not recommended. <<< unique keys

        ))}
      </div>

    </div>
  );
};

export default Body;
