import ResCategory from './ResCategory';
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useRestaurantMenu from '../utils/useRestaurantMenu';
import { useState } from 'react';

const RestaurantMenu = () => {
    const[showIndex, setShowIndex] = useState(null)

    const {resId} = useParams()
    const resInfo = useRestaurantMenu(resId);

if(resInfo === null){
    return <Shimmer/>
}
const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]?.card?.card;

const {name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[2]?.card?.card?.info;




const categories = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter((c) => c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

console.log(categories);

    return (
        <div className='text-center'>
            <h1 className="font-bold text-2xl p-4 m-4">🍽{name}🍣</h1>
            <h1>🏷️Offers - {costForTwoMessage}🏷️</h1>
           
            {categories.map((category, index)=> <ResCategory  
             data={category?.card?.card}
             key={category?.card?.card?.id}
             showItems={index === showIndex  ? true : false}
             setShowIndex={()=> setShowIndex(index)}/> 
             
             )}
        </div>
    )
}

export default RestaurantMenu