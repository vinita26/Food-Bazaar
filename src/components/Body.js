import RestaurantCard from './RestaurantCard';
import { useState, useEffect } from "react";

const Body = () => {
    const [resInfo, setResInfo]  = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState('');
    useEffect(()=> {
          fetchData();
    },[]);

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

console.log('body res', filteredRestaurants)
    return ( resInfo ?
      (  <div>
            <div className='searchBox'>
                <input type='text' value={searchText} onChange={(e)=>{setSearchText(e.target.value)}}/>
                <button type='submit' onClick={()=>{
                    console.log('searchText:',searchText)
                    const filteredRestaurant = resInfo.filter((res) =>
                    res.info.name.toLowerCase().includes(searchText.toLowerCase())
                  );
    
                  setFilteredRestaurants(filteredRestaurant);
                  console.log('filteredRestaurants', filteredRestaurant)
                    }}>Search</button>
                <button >Top Rated restaurants</button>
            </div>
            <div className='res-cards'>
                {filteredRestaurants.map((restaurant) => ( <RestaurantCard resData={restaurant?.info} />))}
            </div>
            
        </div>) : null
    )
}

export default Body;