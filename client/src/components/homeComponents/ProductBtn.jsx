import { FaCaretDown } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductBtn = () => {
    return (
        <Link to='/shop'>
            <span className='bg-[#634832] text-[#fff] p-2 font-bold cursor-pointer flex items-center gap-2'>
                <button className='uppercase'>buy now
                </button>
                <span className='shadow p-1 grid place-items-center'><FaCaretDown className='text-xl' /></span>
            </span>
        </Link>
    );
};

export default ProductBtn;