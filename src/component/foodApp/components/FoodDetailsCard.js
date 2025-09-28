import { BASE_IMAGE_URL } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addItem, removeItem} from '../redux/cartSlice';
import { useState } from 'react';

const FoodDetailsCard = (props) => {
    const dispatch = useDispatch();
    const [itemList, setItemList] = useState(0);
    const {name, price, defaultPrice, ratings: {aggregatedRating}, description, imageId} = props.item.card.info;
    const handleAddItem = (item) => {
        if(item){
            setItemList(prevItemList => prevItemList + 1);
        }
        dispatch(addItem(item));
    };

    const handleRemoveItem = (item) => {
        if(item) {
            setItemList(prevItemList => prevItemList-1);
            dispatch(removeItem());
        }
    }

    console.log('name:', name , 'aggregatedRating:', aggregatedRating);
    return (
        <div className='border-b-1 m-2 p-2 border-gray-400 flex justify-between'>
            <div className='flex flex-col w-10/12'>
                <span className='font-bold'>{name}</span>
                <span>₹ {price/100 || defaultPrice/100}</span>
                { Object.keys(aggregatedRating).length > 0 && (
                    <span className='my-2'>
                        <span className='text-green-700 font-bold'>⭐️ {aggregatedRating.rating}</span>
                        ({aggregatedRating.ratingCountV2})
                    </span>
                )}
                <p className='text-gray-600 text-xs'>{description}</p>
            </div>
            <div className='flex flex-col-reverse'>
                <img className='h-[150px] m-1 p-1 rounded-3xl w-full' alt='biryaniIamge' src={BASE_IMAGE_URL + imageId}></img> 
                <div className='absolute border-1 border-gray-300 rounded-md bg-white mx-6'>
                    {itemList === 0 ? <button 
                        className='p-2 text-green-700 font-semibold mx-8'
                        onClick={() => handleAddItem(props.item)}
                    >
                        ADD
                    </button> :
                    <div className='text-green-700 font-semibold mx-1 flex justify-between'>
                        <button className='mx-2 p-2 text-center' onClick={handleRemoveItem}>-</button>
                        <span className='mx-1 p-2'>{itemList}</span>
                        <button className='mx-2 p-2' onClick={() => handleAddItem(props.item)}>+</button>
                    </div>
                    }
                </div>
            </div>  
        </div>

    );
}

export const isBestSeller = (FoodDetailsCard) => {
    return (props) => {
        return (
            <div>
                <label className='text-orange-600 px-4 font-medium'>Best Seller</label>
                <FoodDetailsCard {...props}/>
            </div>
        )
    }
};

export default FoodDetailsCard;