import RestaurantCard, { withFastrackLabel } from './RestaurantCard';
import { useContext, useEffect, useState } from "react";

import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import UserContext from '../utils/UserContext';

const Body = () => {
  const [listOfRestros, setListRestros] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredRestros, setFilteredRestros] = useState([]);

  const FastrackRestros = withFastrackLabel(RestaurantCard);
  const { loggedInUser, setUserInfo } = useContext(UserContext);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.377257&lng=78.134465&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const jsonData = await data.json();
      const restaurants = jsonData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setListRestros(restaurants);
      setFilteredRestros(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSearch = () => {
    const filteredRestaurants = listOfRestros.filter((res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestros(filteredRestaurants);
  };

  const handleTopRated = () => {
    const filteredList = listOfRestros.filter((resItem) => resItem.info.avgRating >= 4);
    setFilteredRestros(filteredList);
  };

  if (listOfRestros.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="m-4 p-4 flex">
          <input
            className="search-box border m-2 px-3 py-1"
            type="text"
            placeholder="Search restaurants near you"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="border-black border m-2 px-3 py-1 bg-green-500 rounded text-sm"
            onClick={handleSearch}
          >
            Search
          </button>
          <button
            className="border-black border m-2 px-3 py-1 bg-orange-500 rounded text-sm"
            onClick={handleTopRated}
          >
            Top Rated Restaurants
          </button>
          <input
            placeholder="Please enter your name"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
            className="border m-2 px-3 py-1"
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestros.map((resItem) => (
          <Link to={"/restaurants/" + resItem.info.id} key={resItem.info.id}>
            {resItem.info.sla.deliveryTime < 30 ? (
              <FastrackRestros resData={resItem} />
            ) : (
              <RestaurantCard resData={resItem} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
