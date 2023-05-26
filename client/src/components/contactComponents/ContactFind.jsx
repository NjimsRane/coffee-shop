

const ContactFind = ({ img, title, subTitle, desc }) => {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-[black]/50"></div>
            <div>
                <img src={img} alt="place to find us" className="w-full" />
                <div className="absolute h-full inset-0 top-[35%] md:top-[30%] lg:top-[55%] text-[#fff] left-8 flex flex-col gap-4">
                    <h2 className="capitalize text-3xl font-bold" >
                        {title}
                        <span className="ml-2 font-normal">{subTitle}</span>
                    </h2>
                    <p className="text-lg w-[30rem]">{desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactFind; 