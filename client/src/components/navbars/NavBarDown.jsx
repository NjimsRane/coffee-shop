import { MdOutlineMenu, MdShoppingCart, MdClose, MdOutlineMiscellaneousServices } from 'react-icons/md';
import { logo } from "../../assets";
import { useShoppingCart } from '../../context/shoppingCartContext';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';

const Menu = () => {
    return (
        <>
            <NavLink to='/'
                className={({ isActive }) => isActive ? 'active' : 'link'}
            >home</NavLink>
            <NavLink to='/blog'
                className={({ isActive }) => isActive ? 'active' : 'link'}
            >blog</NavLink>
            <NavLink to='/about'
                className={({ isActive }) => isActive ? 'active' : 'link'}
            >about us</NavLink>
            <NavLink to='/shop'
                className={({ isActive }) => isActive ? 'active' : 'link'}
            >shop</NavLink>
            <NavLink to='/contact'
                className={({ isActive }) => isActive ? 'active' : 'link'}>contact us</NavLink>
            <NavLink to='/cart'
                className={({ isActive }) => isActive ? 'active' : 'link'}>cart</NavLink>
        </>
    );
};

const NavBarDown = () => {

    const [toggleMenu, settoggleMenu] = useState(true);

    const { openCart, cartQuantity } = useShoppingCart();


    return (
        <div className="bg-white flex justify-between items-center px-4 py-8 shadow-sm  md:px-16 bg-[#fff] relative">
            <div className="left">
                <Link href='/'>
                    <img src={logo} alt="logo" className="w-60" />
                </Link>
            </div>
            <div className="right flex items-center gap-6  cursor-pointer">
                <div className="gap-8 capitalize text-2xl font-medium hidden lg:flex lg:items-center">
                    <Menu />
                </div>
                {cartQuantity > 0 && (
                    <button className='border border-myBorder p-2 order-1 relative bg-navBar text-[#fff] ' onClick={openCart}>
                        <MdShoppingCart className='w-9 h-fit cursor-pointer transition-all duration-500 ' />
                        <span className='absolute bottom-0 right-0 h-7 w-7 rounded-full bg-[crimson] text-[#fff] translate-x-[25%] translate-y-[25%] flex justify-center items-center'>{cartQuantity}</span>
                    </button>
                )}
                <div className='border border-myBorder cursor-pointer p-2 lg:hidden'>
                    {toggleMenu
                        ? <MdClose onClick={() => settoggleMenu(false)} className='text-4xl' />
                        : <MdOutlineMenu onClick={() => settoggleMenu(true)} className='text-4xl' />
                    }
                </div>
                {toggleMenu && (
                    <div className="gap-5 capitalize text-2xl font-medium flex flex-col absolute top-[8rem] bg-[#fff] w-[20rem] right-8 md:right-16 p-4 z-[1000] lg:hidden showNav">
                        <Menu />
                    </div>
                )}

            </div>
        </div>
    );
};

export default NavBarDown;