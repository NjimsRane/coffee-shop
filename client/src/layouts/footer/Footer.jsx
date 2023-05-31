import { Link } from "react-router-dom";
import { logo, ios, android } from "../../assets";

import { ImFacebook, ImGoogle, ImPinterest } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';




const Footer = () => {
    return (
        <footer className="px-4 py-5 flex flex-col gap-16 md:px-6 lg:px-16 ">
            <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between ">
                <Link to='/'>
                    <img src={logo} alt="logo" className="w-64" />
                </Link>
                <div className="flex items-center flex-wrap gap-3 justify-center" >
                    <a href="#" aria-label="link to apple store">
                        <img src={ios} alt="apple" className="w-60" />
                    </a>
                    <a href="#" aria-label="link to play store">
                        <img src={android} alt="android" className="w-60" />
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-8 items-center text-center lg:flex-row lg:justify-between lg:text-left">
                <div className="lg:self-start">
                    <h3 className="footerTitle">information</h3>
                    <ul className=" footerList lg:items-start">

                        <li>
                            <Link to="/">home</Link>
                        </li>
                        <li>
                            <Link to="/">blog</Link>
                        </li>
                        <li>
                            <Link to="/">about us</Link>
                        </li>
                        <li>
                            <Link to="/shop">shop</Link>
                        </li>
                        <li>
                            <Link to="/contact">contact us</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="footerTitle">top categories</h3>
                    <ul className="footerList lg:items-start">
                        <li>
                            <Link to="/">cafe latte</Link>
                        </li>
                        <li>
                            <Link to="/">ice coffee</Link>
                        </li>
                        <li>
                            <Link to="/">mocha</Link>
                        </li>
                        <li>
                            <Link to="/">cappucino</Link>
                        </li>
                        <li>
                            <Link to="/contact">espresso</Link>
                        </li>
                    </ul>

                </div>
                <div className="lg:self-start">
                    <h3 className="footerTitle">others</h3>
                    <ul className="footerList lg:items-start">
                        <li>
                            <Link to="/">checkout</Link>
                        </li>
                        <li>
                            <Link to="/cart">cart</Link>
                        </li>
                        <li>
                            <Link to="/">product</Link>
                        </li>
                        <li>
                            <Link to="/contact">legal</Link>
                        </li>

                    </ul>

                </div>
                <div className="lg:self-start">
                    <h3 className="footerTitle">social media</h3>
                    <div className="flex flex-col items-center gap-8 lg:items-start">
                        <div className="flex items-center gap-4">
                            <a href="#" className=" footerLinks bg-[#4267B2]" aria-label="link to facebook">
                                <ImFacebook />
                            </a>
                            <a href="#" className="footerLinks bg-[#DB4437]" aria-label="link to pinterest">
                                <ImPinterest />
                            </a>
                            <a href="#" className="footerLinks bg-[#DB4437]" aria-label="link to google">
                                <ImGoogle />
                            </a>
                            <a href="#" className="footerLinks bg-[#1DA1F2]" aria-label="link to twitter">
                                <AiOutlineTwitter />
                            </a>
                        </div>
                        <p className="text-[#6e6e6e] text-2xl text-center font-semibold">Signup and get exclusive offers and coupon codes</p>
                        <Link to='/register'>
                            <button type='submit' className='bg-[#634832] uppercase px-8 py-4 text-xl text-[#fff] font-bold'>sign up</button>
                        </Link>
                    </div>
                </div>
            </div>

            <ul className="footerListTwo flex flex-col items-center gap-[1rem] md:flex-row md:gap-4 md:justify-center">
                <li>
                    <Link to="/">privacy policy</Link>
                </li>
                <li>
                    <Link to="/">refund policy</Link>
                </li>
                <li>
                    <Link to="/">cookie policy</Link>
                </li>
                <li>
                    <Link to="/contact">terms & conditions</Link>
                </li>

            </ul>
            <div className="">
                <hr className="border-0 border-b-[1px] border-[#c7c6c6] " />
            </div>
        </footer>
    );
};

export default Footer;