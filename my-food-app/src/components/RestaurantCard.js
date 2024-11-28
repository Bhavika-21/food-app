import { CDN_URL } from "../utils/constants";
import icon from "../assets/rating.png";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, sla, deliveryTime, avgRating, cloudinaryImageId } = resData?.info;

  return (
    <div className="res-card m-2 p-2 w-[200px] h-[270px] border border-slate-200 rounded shadow-lg hover:bg-slate-100">
      <img className="res-logo w-[200px] h-[150px] rounded shadow-lgs" src={CDN_URL + cloudinaryImageId} alt="restro-img" />
      <h3 className="font-medium mt-2">{name}</h3>
      <p className="text-xs">{cuisines.join(", ")}</p>

      <span className="flex items-center space-x-1">
        <img src={icon} alt="rating-icon" className="w-4" />
        <p className="text-xs font-medium">{avgRating} • {sla.deliveryTime} mins</p>
      </span>





    </div>
  )
}

export const withFastrackLabel = (RestaurantCard)=>{
  return (props)=>{
    return(
      <div>
        <label className="absolute text-black px-1 bg-green-500 border border-black rounded-lg">Rapid🏍</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}
export default RestaurantCard;