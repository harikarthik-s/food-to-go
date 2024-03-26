import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import logo from "../utils/logo.png";
import Shimmer from "./Shimmer";

//State Variable - we use React HOOK - useState(), useEffect() - utility function given by React
// const [resList] = useState([])

const Body = () => {
  const [restoList, setrestoList] = useState([]); 

  useEffect(()=>{
    fetchData();
  })

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    // optional chaining
    setrestoList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  //Conditional Rendering
  // if(restoList.length === 0) {
  //   return <Shimmer/>
  // }
  
  //Conditional Rendering
  return restoList.length == 0? <Shimmer/> : (
    <div className="body">
      <img src={logo} alt="img" className="body-img"/>
      <h1>Restaurants Near me</h1>
      <div className="search">Search</div>
      <div className="filter">
        <p>Filter:</p>
        <button type="button" className="filter-btn" onClick={()=>{
          // const allrestoList = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
          // setrestoList(allrestoList);
        }}>All Restaurants</button> 
        <button type="button" className="filter-btn" onClick={()=>{
          const filteredrestoList = restoList.filter((restaurant)=> restaurant?.info?.avgRating > 4);
          setrestoList(filteredrestoList);
        }}>Top Rated Restaurants</button> 
        <button type="button" className="filter-btn" onClick={()=>{
          const nearrestoList = restoList.filter((restaurant)=> (restaurant?.info?.sla?.deliveryTime < 30));
          setrestoList(nearrestoList);
        }}>Near me</button>   
      </div>
      <div className="restro-container">
        {restoList.map((restaurant, index) => (
          <RestaurantCard key={restaurant?.info?.id} resData={restaurant} />
          // <RestaurantCard key={index} resData={restaurant} />    //using index is not recommended. <<< unique keys
        ))}
      </div>
    </div>
  );
};

export default Body;