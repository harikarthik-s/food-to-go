import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData";
import logo from "../utils/logo.png"
//Normal Variable
let resList2 = [
  {
    data: {
      id: "121603",
      name: "Kannur Food Point",
      cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
      cuisines: ["Kerala", "Chinese"],
      deliveryTime: 24,
      avgRating: "3.9",
    },
  },
  {
    data: {
      id: "229",
      name: "Meghana Foods",
      cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
      cuisines: [
        "Biryani",
        "Andhra",
        "South Indian",
        "North Indian",
        "Chinese",
        "Seafood",
      ],
      deliveryTime: 16,
      avgRating: "4.4",
    }
  },
  {
    data: {
      id: "428",
      name: "Biryani Pot",
      cloudinaryImageId: "mdipoyzfzsa7n7igskht",
      cuisines: ["North Indian", "Biryani"],
      deliveryTime: 19,
      avgRating: "3.9"
    }
  },
  {
    data: {
      id: "223",
      name: "Truffles",
      cloudinaryImageId: "cd832b6167eb9f88aeb1ccdebf38d942",
      cuisines: ["American", "Continental", "Desserts", "Italian"],
      deliveryTime: 30,
      avgRating: "4.4"
    }
  },
]
//State Variable - we use React HOOK - useState(), useEffect() - utility function given by React
// const [resList] = useState([
//   {
//     data: {
//       id: "121603",
//       name: "Kannur Food Point",
//       cloudinaryImageId: "bmwn4n4bn6n1tcpc8x2h",
//       cuisines: ["Kerala", "Chinese"],
//       deliveryTime: 24,
//       avgRating: "3.9",
//     },
//   },
//   {
//     data: {
//       id: "229",
//       name: "Meghana Foods",
//       cloudinaryImageId: "xqwpuhgnsaf18te7zvtv",
//       cuisines: [
//         "Biryani",
//         "Andhra",
//         "South Indian",
//         "North Indian",
//         "Chinese",
//         "Seafood",
//       ],
//       deliveryTime: 16,
//       avgRating: "4.4",
//     }
//   },
//   {
//     data: {
//       id: "428",
//       name: "Biryani Pot",
//       cloudinaryImageId: "mdipoyzfzsa7n7igskht",
//       cuisines: ["North Indian", "Biryani"],
//       deliveryTime: 19,
//       avgRating: "3.9"
//     }
//   }
// ])


const Body = () => {
  const [restoList, setrestoList] = useState([]); 

  useEffect(()=>{
    fetchData();
  })

  const fetchData = async () =>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

    const json = await data.json();

    // console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants);
    // console.log(resList);
    setrestoList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }

  if(restoList.length === 0) {
    return <h1>Loading...</h1>
  }

  return (
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