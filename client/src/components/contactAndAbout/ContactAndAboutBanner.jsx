import { FaGreaterThan } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const ContactAndAboutBanner = ({ img2, title, subtitle }) => {
    return (
        <div className="banner relative h-[25vh] ">
            <div className='absolute h-full w-full inset-0 bg-[black]/90 '></div>
            <div className='h-full '>
                <img src={img2} alt="" className='w-full h-full object-cover' />
                <div className='absolute w-full top-[50%] translate-y-[-50%] flex flex-col gap-8 text-[#fff] px-8 md:flex-row md:justify-between md:px-16'>
                    <h1 className='text-6xl capitalize font-bold'>{title}</h1>
                    <ol className='flex items-center gap-2 capitalize text-2xl'>
                        <li className='relative'>
                            <Link to='/' className='font-bold'>home</Link>
                        </li>

                        <li>
                            <span className="mr-2 font-normal">&gt;</span>
                            <span aria-current='page'>{subtitle}</span>
                        </li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default ContactAndAboutBanner;