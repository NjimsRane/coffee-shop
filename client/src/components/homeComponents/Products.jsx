import { product1, product2, product3, product4, product5, product6 } from '../../assets';
import { AiFillStar } from 'react-icons/ai';
import { ProductBtn } from '../../components';

const Products = () => {
    return (
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className=' rounded relative shadow-md py-6'>
                <p className='flex items-center gap-1 text-[#fff] bg-navBar px-2 py-1 absolute left-0 top-0'>
                    <span className='order-1 capitalize'>featured</span>
                    <AiFillStar className='order-first' />
                </p>
                <div className='flex flex-col md:flex-row'>
                    <img src={product1} alt="product" className='md:w-32 md:h-fit' />
                    <div className='flex flex-col gap-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-[#7a7979]' />
                            </div>
                            <span className='text-[#5e5d5d] font-semibold'>4 Stars</span>
                        </div>
                        <h3 className='text-navBar capitalize font-semibold text-xl'>cappucino</h3>
                        <p className='text-[#6e6e6e] text-lg w-fit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, itaque fugit officiis error deleniti dicta.</p>
                        <div className='flex items-center justify-between'>
                            <p className='flex flex-col font-bold'>
                                <span>19$</span>
                                <span className='text-[#634832] text-sm line-through'>29$</span>
                            </p>
                            <ProductBtn />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' rounded shadow-md py-6'>
                <div className='flex flex-col md:flex-row'>
                    <img src={product5} alt="product" className='md:w-32 md:h-fit' />
                    <div className='flex flex-col gap-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-[#7a7979]' />
                                <AiFillStar className='text-[#7a7979]' />
                            </div>
                            <span className='text-[#5e5d5d] font-semibold'>3 Stars</span>
                        </div>
                        <h3 className='text-navBar capitalize font-semibold text-xl'>arabica roasted</h3>
                        <p className='text-[#6e6e6e] text-lg w-fit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, itaque fugit officiis error deleniti dicta.</p>
                        <div className='flex items-center justify-between'>
                            <span className='font-bold'>12$</span>
                            <ProductBtn />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' rounded shadow-md py-6'>
                <div className='flex flex-col md:flex-row'>
                    <img src={product2} alt="product" className='md:w-32 md:h-fit' />
                    <div className='flex flex-col gap-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-[#7a7979]' />
                                <AiFillStar className='text-[#7a7979]' />
                            </div>
                            <span className='text-[#5e5d5d] font-semibold'>3 Stars</span>
                        </div>
                        <h3 className='text-navBar capitalize font-semibold text-xl'>arabica green</h3>
                        <p className='text-[#6e6e6e] text-lg w-fit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, itaque fugit officiis error deleniti dicta.</p>
                        <div className='flex items-center justify-between'>
                            <span className='font-bold'>12$</span>
                            <ProductBtn />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' rounded shadow-md py-6'>
                <div className='flex flex-col md:flex-row'>
                    <img src={product3} alt="product" className='md:w-32 md:h-fit' />
                    <div className='flex flex-col gap-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                            </div>
                            <span className='text-[#5e5d5d] font-semibold'>5 Stars</span>
                        </div>
                        <h3 className='text-navBar capitalize font-semibold text-xl'>cold brewed</h3>
                        <p className='text-[#6e6e6e] text-lg w-fit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, itaque fugit officiis error deleniti dicta.</p>
                        <div className='flex items-center justify-between'>
                            <span className='font-bold'>19$</span>
                            <ProductBtn />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' rounded relative shadow-md py-6'>
                <p className='flex items-center gap-1 text-[#fff] bg-navBar px-2 py-1 absolute left-0 top-0'>
                    <span className='order-1 capitalize'>featured</span>
                    <AiFillStar className='order-first' />
                </p>
                <div className='flex flex-col md:flex-row'>
                    <img src={product4} alt="product" className='md:w-32 md:h-fit' />
                    <div className='flex flex-col gap-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                            </div>
                            <span className='text-[#5e5d5d] font-semibold'>5 Stars</span>
                        </div>
                        <h3 className='text-navBar capitalize font-semibold text-xl'>cappucinos 30:0</h3>
                        <p className='text-[#6e6e6e] text-lg w-fit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, itaque fugit officiis error deleniti dicta.</p>
                        <div className='flex items-center justify-between'>
                            <p className='flex flex-col font-bold'>
                                <span>8$</span>
                                <span className='text-[#634832] text-sm line-through'>15$</span>
                            </p>
                            <ProductBtn />
                        </div>
                    </div>
                </div>
            </div>
            <div className=' rounded shadow-md py-6'>
                <div className='flex flex-col md:flex-row'>
                    <img src={product6} alt="product" className='md:w-32 md:h-fit' />
                    <div className='flex flex-col gap-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <div className='flex items-center gap-2'>
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                                <AiFillStar className='text-navBar' />
                            </div>
                            <span className='text-[#5e5d5d] font-semibold'>5 Stars</span>
                        </div>
                        <h3 className='text-navBar capitalize font-semibold text-xl'>robusta roasted</h3>
                        <p className='text-[#6e6e6e] text-lg w-fit'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, itaque fugit officiis error deleniti dicta.</p>
                        <div className='flex items-center justify-between'>
                            <p className='flex flex-col font-bold'>
                                <span>8$</span>
                                <span className='text-[#634832] text-sm line-through'>15$</span>
                            </p>
                            <ProductBtn />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Products;