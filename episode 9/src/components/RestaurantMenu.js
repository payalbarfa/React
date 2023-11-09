import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constant";
import useRestaurantMenu from "../utils/useRestrauntMenu";
const RestaurantMenu=()=>{
    const {resId} = useParams();
    // const[resInfo, setresInfo]=useState(null);

    const resInfo = useRestaurantMenu(resId);
    // useEffect(()=>{
    // fetchMenu();
    // },[]);
     
    // const fetchMenu = async ()=>{
    //     const data = await fetch(
    //         MENU_API+res
    //         // "&&submitAction=ENTER&restaurantId=" 

    //     );
    //     const json = await data.json();
    //     console.log(json);
    //     setresInfo(json.data)
    // };
    if(resInfo === null) return <Shimmer/>;
    const {name, cuisines , cloudinaryImageId, costForTwoMessage} = resInfo?.cards[0]?.card?.card?.info;
    const {itemCards} = resInfo?.cards[2]?.groupedCard?.cardsGroupMap?.REGULAR?.cards[1]?.card?.card;
    //if(resIfo === nnull) return <Shimmer/>

    return(
    // (resInfo === null)?(
    // <Shimmer/>
    // ):
    
     <div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(",")}</h3>
        <h3>{costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
            {itemCards.map((item) =>( 
            <li key={item.card.info.id}> {item.card.info.name}-{"Rs."}{item.card.info.price/100 || item.card.info.defaultprice/100}</li>
         ))}
            {/* <li>{itemCards[0].cards.info.name}</li>
            <li>Burgers</li>
            <li>Diet Coke</li> */}
        </ul>

     </div>
    );
};
export default RestaurantMenu;