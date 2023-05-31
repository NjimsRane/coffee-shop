
import { Link } from 'react-router-dom';
import { FourStars } from '../homeComponents/ProductStar';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { formatCurrency } from '../../utilities/formatCurrency';



const CardComponents = ({ id, name, currentPrice, prevPrice, imgUrl }) => {



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
                        <FaPlus />
                        <span className='text-xl'>0</span>
                        <FaMinus />
                    </div>
                </div>
                <FourStars />
                <div className="text-center w-[50%] ">
                    <button className='bg-[#634832] text-[#fff] p-2 font-bold cursor-pointer w-full  uppercase'>add to cart</button>
                </div>
                <Link to='/' className='text-[#634832] uppercase'> quick view</Link>
            </div>

        </div>
    );
};

export default CardComponents;