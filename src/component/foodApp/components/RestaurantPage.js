import React, {useEffect, useState} from 'react';
import { ShimmerCard } from './RestaurantsComponent';
import { Link, useParams } from 'react-router-dom';
import useRestaurantsMenu from '../utils/useRestaurantsMenu';
import FoodCategory from './FoodCategory';

const RestaurantPage = () => {
    //const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    const resInfo = useRestaurantsMenu(resId);
    const[showIndex, setShowIndex] = useState('0');

    
    // let's move this to make custom hook
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.5204303&lng=73.8567437&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`);
    //         const result = await data.json();

    //         setResInfo(result?.data);
    //     }
    //     fetchData();

    // }, []);

    if(resInfo === null) {
        return (<ShimmerCard />);
    }

   const { name, avgRating, cuisines, costForTwoMessage, totalRatingsString, areaName, sla: {slaString} } = resInfo.cards[2]?.card?.card.info;
   const itemCategories = resInfo.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        card => 
            card?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
        );

    return (
        <div className='mx-20'>
            <h1 className='font-extrabold my-10 text-4xl'>{name}</h1>
            <div className='border border-gray-400 rounded-2xl m-4 px-4 w-110  shadow-2xl inset-shadow-zinc-300 inset-shadow-sm'>
                <h3 className='font-bold'>⭐️ {avgRating} ({totalRatingsString}) · {costForTwoMessage}</h3>
                <h3>{cuisines.join(',')}</h3>
                <h3>Outlet {areaName}</h3>
                <h3>{slaString}</h3>
            </div>
            <h2 className='text-2xl text-green-900 mx-3'>Menu</h2>
            {itemCategories.map((itemCategory, index) => 
                <FoodCategory 
                    itemCategory={itemCategory} 
                    key={itemCategory.card.card.title} 
                    showCategory={showIndex === index || false} 
                    handleCategoryClick={() => setShowIndex(prevIndex => prevIndex === index ? null : index)}
                />
            )}
        </div>
    )
};

export default RestaurantPage;