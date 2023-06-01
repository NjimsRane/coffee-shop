
import { banner2, gal4 } from '../../assets';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
const slides = [
    {
        img1: banner2,
        title: "Cafe Latte It While It's Fresh ",
        subtitle: "Get Cafe Latte From Our Shop",
        desc: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula."

    },
    {
        img1: gal4,
        title: "Freshly Picked Arabica Green",
        subtitle: "Can Now Be Purchased",
        desc: "Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Sed porttitor lectus nibh. Vestibulum ac diam sit amet quam vehicula."
    }
];


const HeroComponents = () => {

    const [currentIndex, setCurrentIndex] = useState(1);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };


    return (
        <div className='hero w-full h-[30.75rem] relative group'>
            <div
                style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url(${slides[currentIndex].img1})` }}
                className='w-full h-full bg-center bg-cover duration-500 transition-all flex flex-col justify-center items-center'
            >
                <h1 className='text-[#fff] text-3xl md:text-5xl font-bold capitalize text-center leading-normal'>{slides[currentIndex].title}  <span className='font-light'>{slides[currentIndex].subtitle}</span>
                </h1>
                <p className='text-[#fff] text-xl md:text-2xl leading-normal text-center w-[30ch] md:w-[50ch] my-8' >{slides[currentIndex].desc}</p>
                <Link to='/shop' className=" block text-center w-[10rem]">
                    <button className='bg-[#634832] text-[#fff] p-2 font-bold cursor-pointer w-full uppercase'>shop now</button>
                </Link>
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-2 text-2xl bg-[black]/50 text-[#fff] cursor-pointer rounded-full'>
                <BsChevronCompactLeft size={30} onClick={prevSlide} />
            </div>
            <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-2 text-4xl bg-[black]/50 text-[#fff] cursor-pointer rounded-full'>
                <BsChevronCompactRight onClick={nextSlide} size={30} />
            </div>

        </div>
    );
};

export default HeroComponents;;