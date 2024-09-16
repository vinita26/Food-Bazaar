import Shimmer from './Shimmer';
import RestaurantCard , {withPromotedLabel } from './RestaurantCard';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from '../utils/useOnlineStatus';
import React from 'react';

const Body = () => {
    const [resInfo, setResInfo]  = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    const onlineStatus = useOnlineStatus();
    useEffect(()=> {
        fetchData();
  },[]);

  const RestaurantCardPromoted:any = withPromotedLabel(RestaurantCard);
    const fetchData = async () => {
        let headers = new Headers();
    headers.append('Access-Control-Allow-Origin', '*');
    headers.append('Content-Type', 'application/json');
    headers.append('Accept', 'application/json');

    fetch('https://proxy.cors.sh/https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING', {
  headers: {
  'x-cors-api-key': 'temp_1d79a2e0b912b90be4f82bff0d3eb792'
  }
})
    .then(response => response.json())
    .then(json => {
        setResInfo(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
        setFilteredRestaurants(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    })
    .catch(error => console.log('Authorization failed: ' + error.message));
    }

    if(onlineStatus == false) return <h1>Looks like you are offline!! Please check your internet connection.</h1>
    return ( 
        // (filteredRestaurants.length == 0) ? <Shimmer/> :
       <div>
            <div className='searchBox m-4 p-4'>
                <input data-testid='searchInput' className='border border-solid border-black' type='text' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button className='px-4 bg-green-100 m-4 rounded-lg' type='submit' onClick={()=>{
                    
                    const filteredRestaurant = resInfo.filter((res:any) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
    
                  setFilteredRestaurants(filteredRestaurant);
                    }}>Search</button>
                <button className='px-2 bg-gray-100 m-4 rounded-lg dark:bg-pink-300' onClick={() => {
                    const filteredList = resInfo.filter(
                        (res:any) => res.info.avgRating > 4.5
                    );
                    setFilteredRestaurants(filteredList);
            }}>Top Rated restaurants</button>
            </div>
            <div className='px-2 flex flex-wrap'>
                {filteredRestaurants.map((restaurant:any) => (
                    <Link
                        key={restaurant?.info.id}
                        to={"/restaurants/" + restaurant?.info.id}
                    >
                       { restaurant?.info.promoted == false ?<RestaurantCardPromoted /> :<RestaurantCard resData={restaurant?.info} />}
                        
                    </Link>
            ))}
            </div>
            
        </div>
    )
}

export default Body;