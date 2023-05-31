
import { AiFillStar } from 'react-icons/ai';


export const FourStars = () => {
    return (
        <div className='flex items-center gap-2'>
            <AiFillStar className='text-navBar' />
            <AiFillStar className='text-navBar' />
            <AiFillStar className='text-navBar' />
            <AiFillStar className='text-navBar' />
            <AiFillStar className='text-[#7a7979]' />
        </div>
    );
};
export const ThreeStars = () => {
    return (
        <div className='flex items-center gap-2'>
            <AiFillStar className='text-navBar' />
            <AiFillStar className='text-navBar' />
            <AiFillStar className='text-navBar' />
            <AiFillStar className='text-[#7a7979]' />
            <AiFillStar className='text-[#7a7979]' />
        </div>
    );
};

const ProductStar = () => {
    return (
        <div className='flex items-center gap-2'>
            <AiFillStar className='text-navBar' />
            <AiFillStar className='text-navBar' />
            <AiFillStar className='text-navBar' />
            <AiFillStar className='text-navBar' />
            <AiFillStar className='text-navBar' />
        </div>
    );
};



export default ProductStar;