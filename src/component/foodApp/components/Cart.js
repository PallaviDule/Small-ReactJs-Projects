import { useSelector, useDispatch } from "react-redux";
import FoodCategory from "./FoodCategory";
import FoodDetailsCard from "./FoodDetailsCard" ;
import { clearCart } from '../redux/cartSlice';


const Cart = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((store) => store.cart.items);
    console.log('cartItems', cartItems);

    const handleClearCart = () => {
        dispatch(clearCart())
    }
    
    return (
        <div className='w-7/12 m-auto'>
            <h2 className='font-bold text-center m-4'>Cart</h2>
            {cartItems.length > 0 ? 
                (   
                    <div>
                        <button 
                            className='border border-gray-400 rounded-2xl m-4 px-4 shadow-2xl inset-shadow-zinc-300 inset-shadow-sm'
                            onClick={handleClearCart}
                        >
                            clear cart
                        </button>
                    {cartItems.map((item) => <FoodDetailsCard item={item} key={item.card.info.id}/>  )}
                    </div>
                )
                :
                (
                    <div className='text-center'>
                        <h3>Your cart is empty.</h3>
                        <p className='text-sm'>You can go to home page to view more restaurants</p>
                    </div>
                )
            }
        </div>
    )
};

export default Cart;