import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Item from "./Item";

const RestaurantCategory = (props) =>{
    const {data, selected, setSelectedIndex} = props;
    const {title} = data;
    // const [selected, setSelected] = useState(false);

    const toggle = () => {
        // setSelected(!selected); 
        setSelectedIndex();
    };
    
    return (
        <div className={`accordion-content`} > 
            <header onClick={toggle}> 
                <span className="accordion-content-title" > 
                        {title +" ("+ data?.itemCards?.length+") "}
                  </span> 
                  {selected ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </header> 
            <div className={selected ? 'accordion-content-description show' : 'accordion-content-description'} > 
                   {
                    data?.itemCards?.map((food) => (
                        <Item key={food?.card?.info?.id} itemData={food} />
                      ))
                   }
            </div> 
        </div> 
    )
}


export default RestaurantCategory;