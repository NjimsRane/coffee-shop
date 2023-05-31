import { product1, product2, product3, product4, product5, product6 } from '../../assets';
import { AiFillStar } from 'react-icons/ai';
import { FiveStart, ProductsDesc } from '../../components';
import { FourStars, ThreeStars } from './ProductStar';


const Products = () => {
    return (
        <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
            <div className=' rounded relative shadow-md py-6'>
                <p className='flex items-center gap-1 text-[#fff] bg-navBar px-2 py-1 absolute left-0 top-0 z-10'>
                    <span className='order-1 capitalize'>featured</span>
                    <AiFillStar className='order-first' />
                </p>
                <div className='flex flex-col md:flex-row overflow-hidden cursor-pointer'>
                    <img src={product1} alt="product" className='md:w-32 md:h-fit transition-all duration-500 hover:scale-90 hover:rotate-6' />
                    <div className='flex flex-col gap-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <FourStars />
                            <span className='text-[#5e5d5d] font-semibold'>4 Stars</span>
                        </div>
                        <ProductsDesc
                            productName='cappucino'
                            productDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, itaque fugit officiis error deleniti dicta.'
                            productPrice={19}
                            productDiscount={29}
                        />
                    </div>
                </div>
            </div>
            <div className=' rounded shadow-md py-6'>
                <div className='flex flex-col md:flex-row overflow-hidden cursor-pointer'>
                    <img src={product5} alt="product" className='md:w-32 md:h-fit transition-all duration-500 hover:scale-90 hover:rotate-6' />
                    <div className='flex flex-col gap-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <ThreeStars />
                            <span className='text-[#5e5d5d] font-semibold'>3 Stars</span>
                        </div>

                        <ProductsDesc
                            productName='arabica roasted'
                            productDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, itaque fugit officiis error deleniti dicta.'
                            productPrice={12}
                        />
                    </div>
                </div>
            </div>
            <div className=' rounded shadow-md py-6'>
                <div className='flex flex-col md:flex-row overflow-hidden cursor-pointer'>
                    <img src={product2} alt="product" className='md:w-32 md:h-fit transition-all duration-500 hover:scale-90 hover:rotate-6' />
                    <div className='flex flex-col gap-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <ThreeStars />
                            <span className='text-[#5e5d5d] font-semibold'>3 Stars</span>
                        </div>
                        <ProductsDesc
                            productName='arabica green'
                            productDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, itaque fugit officiis error deleniti dicta.'
                            productPrice={12}
                        />
                    </div>
                </div>
            </div>
            <div className=' rounded shadow-md py-6'>
                <div className='flex flex-col md:flex-row overflow-hidden cursor-pointer'>
                    <img src={product4} alt="product" className='md:w-32 md:h-fit transition-all duration-500 hover:scale-90 hover:rotate-6' />
                    <div className='flex flex-col gap-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <FiveStart />
                            <span className='text-[#5e5d5d] font-semibold'>5 Stars</span>
                        </div>
                        <ProductsDesc
                            productName='cold brewed'
                            productDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, itaque fugit officiis error deleniti dicta.'
                            productPrice={19}
                        />
                    </div>
                </div>
            </div>
            <div className=' rounded relative shadow-md py-6'>
                <p className='flex items-center gap-1 text-[#fff] bg-navBar px-2 py-1 absolute left-0 top-0 z-10'>
                    <span className='order-1 capitalize'>featured</span>
                    <AiFillStar className='order-first' />
                </p>
                <div className='flex flex-col md:flex-row overflow-hidden cursor-pointer'>
                    <img src={product3} alt="product" className='md:w-32 md:h-fit transition-all duration-500 hover:scale-90 hover:rotate-6' />
                    <div className='flex flex-col gap-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <FiveStart />
                            <span className='text-[#5e5d5d] font-semibold'>5 Stars</span>
                        </div>
                        <ProductsDesc
                            productName='cappucinos 30:0'
                            productDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, itaque fugit officiis error deleniti dicta.'
                            productPrice={8}
                            productDiscount={15}
                        />
                    </div>
                </div>
            </div>
            <div className=' rounded shadow-md py-6'>
                <div className='flex flex-col md:flex-row overflow-hidden cursor-pointer'>
                    <img src={product6} alt="product" className='md:w-32 md:h-fit transition-all duration-500 hover:scale-90 hover:rotate-6' />
                    <div className='flex flex-col gap-4 px-2'>
                        <div className='flex items-center justify-between'>
                            <FiveStart />
                            <span className='text-[#5e5d5d] font-semibold'>5 Stars</span>
                        </div>
                        <ProductsDesc
                            productName='robusta roasted'
                            productDesc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, itaque fugit officiis error deleniti dicta.'
                            productPrice={8}
                            productDiscount={15}
                        />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Products;