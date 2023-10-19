import React, { useEffect } from "react";
import resList from "../utils/mockData";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmer";
const Body =()=>{
    const [listOfRestaurant, setListOfRestaurant] = useState(resList);
    const[searchText, setSearchText] = useState("");
    const[filteredRestaurant, setFilteredRestaurant] = useState([]);

    //   useEffect(()=>{
    //     console.log("useEffect called");
    //   },[]);
    //   console.log("Body rendered");
    useEffect(() => {
        fetchData();
    }, []);
      const fetchData = async()=>{
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        );
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        
    };
    return listOfRestaurant.length === 0 ? <Shimmer/> :(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text"
                    className="search-box"
                    value={searchText}
                    onChange={(e)=>{setSearchText(e.target.value)}}/>
                    <button onClick={()=>{
                 console.log(searchText);
                 const filteredRestaurant = listOfRestaurant.filter((res)=>
                 res.info.name.toLowerCase().includes(searchText.toLowerCase()));
                 setFilteredRestaurant(filteredRestaurant);
            }}>Search

                    </button>
                </div>

            </div>
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
                    filteredRestaurant.map((restaurant)=>
                    <RestaurantCard key={restaurant.info.id} resData={restaurant}/>)

                }

            </div>
        </div>
    );
};
export default Body;