import { useState, useEffect } from "react";
import { MENU_API_URL } from "./constants";

const useRestaurantMenu = (resId) =>{

    const [res, setRes] = useState(null);
    const [menu, setMenu] = useState(null);

    useEffect(async()=>{
        const data = await fetch(MENU_API_URL+resId);
        const json = await data.json();
        setRes(json?.data?.cards[2]?.card?.card?.info);
        setMenu(json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card
            ?.card?.itemCards ||
            json?.data?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2].card
              ?.card?.itemCards);
    },[]);

    return {res, menu};
}

export default useRestaurantMenu;