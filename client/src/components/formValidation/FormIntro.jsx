const FormIntro = ({ cover, img1, title, desc }) => {
    return (
        <div className="relative flex-1">
            <div className='w-full h-[45vh] md:h-full'>
                <img src={cover} alt="coffee" className='w-full h-full object-cover' />
            </div>
            <div className='absolute inset-0 bg-[black]/50'></div>
            <div className='absolute inset-0 flex flex-col items-center  text-center py-10 text-[#fff] '>
                <img src={img1} alt="cup" className='w-20 ' />
                <div className="flex justify-center items-center flex-col h-full gap-10">
                    <h1 className='capitalize font-extrabold text-5xl'>{title}</h1>
                    <p className='text-xl w-[30rem]'>{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default FormIntro;