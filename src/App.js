import React, {lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import About from "./components/Body/About";
import Contact from "./components/Body/Contact"
// import RestaurantMenu from "./components/Menu/RestaurantMenu";
import MenuShimmer from "./components/Menu/MenuShimmer";
import Error from "./components/Body/Error";
import ScrollToTop from "./components/ScrollToTop";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import UserContext from "./utils/UserContext";

const RestaurantMenu = lazy(
  () => import("./components/Menu/RestaurantMenu")
);

const AppLayout = () => {
  const [userName, setUserName] = useState();
  const [userCartItems, setUserCartItems] = useState();

  //authentication
  useEffect(() => {
    //API cal
    const data = {
      user : "Hari",
      cartItems : 3
    }
    setUserName(data.user);
    setUserCartItems(data.cartItems);
  }, []);
  
  return (
    <UserContext.Provider value={{loggedInUser: userName, cartItems:userCartItems, setUserCartItems}}>
    <div className="app">
      
      <Header />
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
      
    </div>
    </UserContext.Provider>
  );
};

const appRouter = createBrowserRouter([
  {
    path:"/",
    element: <AppLayout/>,
    children: [
      {
        path:"/",
        element: <Body/>
      },
      {
        path:"/about",
        element: <About/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
      },
      {
        path:"/restaurants/:resId",
        element: <Suspense fallback= {<MenuShimmer/>}><RestaurantMenu/></Suspense>,
      }
    ],
    errorElement: <Error/>,
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
