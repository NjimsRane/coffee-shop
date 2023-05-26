import { banner2, gal1, gal2, gal3, gal4, gal5, gal6 } from '../../assets';

const Gallery = () => {
    return (
        <div className="my-8 flex flex-col md:flex-row ">
            <div className="follow flex-1">
                <div className='relative h-full'>
                    <img src={banner2} alt="banner" className='w-full h-full object-cover' />
                    <div className='absolute bg-[#111]/80 inset-0 text-[#fff] flex justify-center items-center flex-col gap-8 text-center'>
                        <h2 className='capitalize font-bold text-5xl '>follow us on <br /> instagram</h2>
                        <button className='bg-[#fff] text-[#6e6e6e] p-4'>
                            <a href="#" rel='noopener noreferrer' target='_blank' className='text-4xl uppercase'>follow us</a>
                        </button>
                    </div>
                </div>
            </div>
            <div className="photos grid grid-cols-2  md:grid-cols-3 flex-[2]">
                <div><img src={gal1} alt="coffee" /></div>
                <div>
                    <img src={gal2} alt="coffee" />
                </div>
                <div>
                    <img src={gal3} alt="coffee" />
                </div>
                <div>
                    <img src={gal4} alt="coffee" />
                </div>
                <div>
                    <img src={gal5} alt="coffee" />
                </div>
                <div>
                    <img src={gal6} alt="coffee" />
                </div>
            </div>
        </div>
    );
};

export default Gallery;