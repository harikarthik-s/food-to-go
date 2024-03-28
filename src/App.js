import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import About from "./components/Body/About";
import Contact from "./components/Body/Contact"
import Error from "./components/Body/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
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
        errorElement: <Error/>,
      },
      {
        path:"/contact",
        element:<Contact/>,
        errorElement: <Error/>,
      }
    ],
    errorElement: <Error/>,
  },
 
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
