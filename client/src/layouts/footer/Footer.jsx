import { Link } from "react-router-dom";
import { logo, ios, android } from "../../assets";
import { ListFooter } from '../../components';
import { ImFacebook, ImGoogle, ImPinterest } from 'react-icons/im';
import { AiOutlineTwitter } from 'react-icons/ai';




const Footer = () => {
    return (
        <div className="container px-4 py-5 flex flex-col gap-16 md:mx-auto lg:px-16 ">
            <div className="flex items-center flex-col gap-8 md:flex-row md:justify-between ">
                <div><img src={logo} alt="logo" className="w-64" /></div>
                <div className="flex items-center flex-wrap gap-3 justify-center" >
                    <a href="#" aria-label="link to apple store">
                        <img src={ios} alt="apple" className="w-60" />
                    </a>
                    <a href="#" aria-label="link to play store">
                        <img src={android} alt="android" className="w-60" />
                    </a>
                </div>
            </div>
            <div className="flex flex-col gap-8 items-center text-center md:flex-row lg:justify-between lg:text-left">
                <div>
                    <h3 className="footerTitle">information</h3>
                    <div className=" footerList lg:items-start">
                        <ListFooter linkTo='home' />
                        <ListFooter linkTo='blog' />
                        <ListFooter linkTo='about us' />
                        <ListFooter linkTo='shop' />
                        <ListFooter linkTo='contact us' />
                    </div>
                </div>
                <div>
                    <h3 className="footerTitle">top categories</h3>
                    <div className="footerList lg:items-start">
                        <ListFooter linkTo='cafe latte' />
                        <ListFooter linkTo='ice coffee' />
                        <ListFooter linkTo='mocha' />
                        <ListFooter linkTo='cappucino' />
                        <ListFooter linkTo='espresso' />
                    </div>

                </div>
                <div>
                    <h3 className="footerTitle">others</h3>
                    <div className="footerList lg:items-start">
                        <ListFooter linkTo='checkout' />
                        <ListFooter linkTo='cart' />
                        <ListFooter linkTo='product' />
                        <ListFooter linkTo='shop' />
                        <ListFooter linkTo='legal' />
                    </div>

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

            <div className="flex flex-col items-center gap-[1rem] md:flex-row md:gap-4">
                <ListFooter linkTo='privacy policy' />
                <ListFooter linkTo='refund policy' />
                <ListFooter linkTo='cookie policy' />
                <ListFooter linkTo='terms & conditions' />
            </div>
            <div className="">
                <hr className="border-0 border-b-[1px] border-[#c7c6c6] " />
            </div>
        </div>
    );
};

export default Footer;