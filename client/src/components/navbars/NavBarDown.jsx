import { MdOutlineMenu, MdShoppingCart } from 'react-icons/md';
import { logo } from "../../assets";
import { useShoppingCart } from '../../context/shoppingCartContext';




const NavBarDown = () => {
    const { openCart, cartQuantity } = useShoppingCart();


    return (
        <div className="bg-white flex justify-between items-center px-4 py-8 shadow-sm  md:px-16 bg-[#fff]">
            <div className="left">
                <a href='/'>
                    <img src={logo} alt="logo" className="w-60" />
                </a>
            </div>
            <div className="right flex items-center gap-2 cursor-pointer">
                {cartQuantity > 0 && (
                    <button className='border border-myBorder p-2 order-1 relative bg-navBar text-[#fff] ' onClick={openCart}>
                        <MdShoppingCart className='w-9 h-fit cursor-pointer transition-all duration-500 ' />
                        <span className='absolute bottom-0 right-0 h-7 w-7 rounded-full bg-[crimson] text-[#fff] translate-x-[25%] translate-y-[25%] flex justify-center items-center'>{cartQuantity}</span>
                    </button>
                )}
                <div className='border border-myBorder cursor-pointer p-2 '><MdOutlineMenu className='text-4xl' /></div>
            </div>
        </div>
    );
};

export default NavBarDown;