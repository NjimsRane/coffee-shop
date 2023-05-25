import { MdOutlineMenu } from 'react-icons/md';
import { logo, cake } from "../../assets";




const NavBarDown = () => {
    return (
        <div className="bg-white flex justify-between items-center px-4 py-8 shadow-lg mb-1.5 md:px-16">
            <div className="left">
                <a href='/'>
                    <img src={logo} alt="logo" className="w-60" />
                </a>
            </div>
            <div className="right flex items-center gap-2 cursor-pointer">
                <div className='border border-myBorder p-2 '>
                    <img src={cake} alt='cake' className='w-9' />
                </div>
                <div className='border border-myBorder cursor-pointer p-2 '><MdOutlineMenu className='text-4xl' /></div>
            </div>
        </div>
    );
};

export default NavBarDown;