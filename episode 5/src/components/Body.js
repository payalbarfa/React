import React from "react";
import resList from "../utils/mockData";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
const Body =()=>{
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    return(
        <div className="body">
            <div className="filter-btn">
             <button className="filter-btn"
              onClick={()=>{
                const filteredList = listOfRestaurant.filter((res)=>(
                    res.info.avgRatingString>4
                ));
                setListOfRestaurant(filteredList);
                console.log(filteredList);
              }}
              >
                Top rated restaurants
             </button>
            </div>
            <div className="restro-container">
                {
                    listOfRestaurant.map((restaurant)=>
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)

                }

            </div>
        </div>
    )
};
export default Body;