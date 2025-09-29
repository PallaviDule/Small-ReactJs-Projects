import { BASE_IMAGE_URL } from '../utils/constants';

const RestaurantCard = (props) => {
    const {name, cuisines, avgRating, costForTwo, sla: {slaString}, cloudinaryImageId, areaName} = props.info;
    return (
        <div 
            className='place-container m-1 w-full h-90 hover:bg-amber-50 p-1 hover:scale-105' 
            key={name}
            data-testid='restaurant-card'
        >
            <img className='w-[245px] h-[150px] m-1 p-1 rounded-3xl' alt='biryaniIamge' src={BASE_IMAGE_URL + cloudinaryImageId}></img> 
            <h2 className='font-bold py-2 text-lg'>{name}</h2>
            <h4>⭐️ {avgRating} · {slaString}</h4>
            <h4 className='w-[100%] text-gray-600'>{cuisines.join(", ")}</h4>
            <h4 className='text-gray-500'>{areaName}</h4>
            <h4 className='text-gray-500'>{costForTwo}</h4>
        </div>
    )
 };

 export default RestaurantCard;