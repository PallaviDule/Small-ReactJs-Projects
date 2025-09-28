import {useState} from 'react';
import FoodDetailsCard, {isBestSeller} from './FoodDetailsCard';

const IsBestSellerFoodItem = isBestSeller(FoodDetailsCard);

const FoodCategory = ({itemCategory, showCategory, handleCategoryClick}) => {
   // const [itemFlag, setItemFlag] = useState(true);
    console.log(itemCategory.card.card);
    const {title, itemCards} = itemCategory.card.card;

    const handleClick = () => {
      //  setItemFlag(!itemFlag);
        handleCategoryClick();
    }
    

   // console.log(`showCategory: ${showCategory} and itemFlag: ${itemFlag} and result (${showCategory && itemFlag})`);

    return (
        <div className="w-8/12 mx-auto bg-gray-50 shadow-2xl">
            <div 
                className="flex justify-between my-2 p-4 cursor-pointer"
                onClick={handleClick}
            >
                <span className="font-bold">{title} ({itemCards.length})</span>
                <span>{showCategory ? '⌄' : '˰'}</span>
            </div>
            {(showCategory) && itemCards.map((itemCard) => (
                    itemCard.card.info.isBestseller ?  
                        <IsBestSellerFoodItem item={itemCard} key={itemCard.card.info.id}/> :
                        <FoodDetailsCard item={itemCard} key={itemCard.card.info.id}/>            
            ))}
        </div>
    )
}

export default FoodCategory;