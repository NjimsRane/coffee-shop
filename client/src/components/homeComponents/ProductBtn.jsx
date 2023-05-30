import { FaCaretDown } from 'react-icons/fa';

const ProductBtn = () => {
    return (
        <div className='bg-[#634832] text-[#fff] p-2 font-bold cursor-pointer flex items-center gap-2'>
            <button className='uppercase'>buy now
            </button>
            <span className='shadow p-1 grid place-items-center'><FaCaretDown className='text-xl' /></span>
        </div>
    );
};

export default ProductBtn;