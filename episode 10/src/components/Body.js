import React, { useEffect } from "react";
import resList from "../utils/mockData";
import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
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
            "https://corsproxy.io/?https://hpmarathe.github.io/swiggy-api/Reslist.json"
               );
            
        const json = await data.json();
        setListOfRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurant(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

        console.log(json.data.cards[2].card.card.gridElements.infoWithStyle.restaurants);
        
    };
    const onlineStatus = useOnlineStatus();
    if (onlineStatus === false)
    return(
     <h1>
        Looks like you're offline !! please check your internet connection;
     </h1>
);
    return listOfRestaurant?.length == 0 ? <Shimmer/> :(
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
                    filteredRestaurant?.map((restaurant)=>
                   <Link key={restaurant.info.id} to={"/restaurant/"+restaurant.info.id}>
                   <RestaurantCard  resData={restaurant}/>
                   
               </Link>
                    )
                }

            </div>
        </div>
    );
};
export default Body;