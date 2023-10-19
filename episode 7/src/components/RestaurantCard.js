import { CDN_URL } from "../utils/constant";

const RestaurantCard = (props)=>{
    const{resData} = props;

    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating,areaName} = resData?.info;

    return(
        <div className="restro-card">
            <img className="restro-logo" 
            alt="restaurant image"
            src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}stars</h4>
            <h4>{areaName}</h4>
        </div>
    )
    
    
};
export default RestaurantCard;