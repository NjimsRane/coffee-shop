import { MdFacebook } from 'react-icons/md';
import { AiOutlineTwitter, AiFillLinkedin } from 'react-icons/ai';
import { BsYoutube } from 'react-icons/bs';


const NavBarTop = () => {
    return (
        <div className="bg-navBar flex justify-between items-center px-4 py-5 text-[#fff] md:px-16">
            <div className="left flex items-center gap-6">
                <a href='https://www.facebook.com' aria-label='link to facebook' rel='noreferrer noopener' target='_blank' className='text-3xl'>
                    <MdFacebook />
                </a>
                <a href='https://www.twitter.com' aria-label='link to twitter' rel='noreferrer noopener' target='_blank' className='text-3xl'>
                    <AiOutlineTwitter />
                </a>
                <a href='https://www.linkedin.com' aria-label='link to linkedin' rel='noreferrer noopener' target='_blank' className='text-3xl'>
                    <AiFillLinkedin />
                </a>
                <a href='https://www.youtube.com' aria-label='link to youtube' rel='noreferrer noopener' target='_blank' className='text-3xl'>
                    <BsYoutube />
                </a>
            </div>
            <div className="right flex gap-4">
                <span className='capitalize font-semibold text-xl'>my account</span>
                <span className='uppercase font-semibold text-xl'>(usd)</span>
            </div>
        </div>
    );
};

export default NavBarTop;