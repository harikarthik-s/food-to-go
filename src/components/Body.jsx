import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import logo from "../utils/logo.png"

const Body = () => {
  return (
    <div className="body">
      <img src={logo} alt="img" className="body-img"/>
      <h1>Restaurants Near me</h1>
      <div className="search">Search</div>
      <div className="restro-container">
        {resList.map((restaurant, index) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
          // <RestaurantCard key={index} resData={restaurant} />    //using index is not recommended. <<< unique keys
        ))}
      </div>
    </div>
  );
};

export default Body;