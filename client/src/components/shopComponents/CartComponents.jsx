
import { Link } from 'react-router-dom';
import { FourStars } from '../homeComponents/ProductStar';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { formatCurrency } from '../../utilities/formatCurrency';

import { useShoppingCart } from '../../context/shoppingCartContext';



const CartComponents = ({ id, name, currentPrice, prevPrice, imgUrl }) => {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart();

    const quantity = getItemQuantity(id);

    return (
        <div className="shadow p-4 h-fit text-center">
            <img src={imgUrl} alt="item" className="object-cover mx-auto" />
            <div className='flex flex-col  gap-4'>
                <span className="capitalize text-left text-navBar text-2xl">{name}</span>
                <div className='flex justify-between items-center'>
                    <div className="flex justify-center items-center gap-2 text-navBar  font-bold">
                        <span>{formatCurrency(currentPrice)}</span>
                        <del className="font-normal text-sm">{prevPrice && formatCurrency(prevPrice)}</del>
                    </div>
                    <div className='flex items-center gap-3 cursor-pointer'>
                        <button onClick={() => increaseCartQuantity(id)}>
                            <FaPlus />
                        </button>
                        <span className='text-xl'>{quantity}</span>
                        <button>
                            <FaMinus onClick={() => decreaseCartQuantity(id)} />
                        </button>
                    </div>
                </div>
                <FourStars />
                <div className="text-center w-[50%] ">
                    {quantity === 0
                        ? (<button className='bg-[#634832] text-[#fff] p-2 font-bold cursor-pointer w-full  uppercase' onClick={() => increaseCartQuantity(id)} >add to cart</button>)
                        : (<button className='bg-[#c60539] text-[#fff] p-2 font-bold cursor-pointer w-full  uppercase' onClick={() => removeFromCart(id)}>remove</button>)}

                </div>
                <Link to='/cart' className='text-[#634832] uppercase'> quick view</Link>
            </div>

        </div>
    );
};

export default CartComponents;