

const ContactFind = (props) => {
    return (
        <div className="relative">
            <div className="absolute inset-0 bg-[black]/50"></div>
            <div>
                <img src={props.img} alt="place to find us" className="w-full" />
                <div className="absolute h-full inset-0 top-[35%] md:top-[30%] lg:top-[60%] text-[#fff] left-8 flex flex-col gap-4">
                    <h2 className="capitalize text-3xl font-bold" >
                        {props.title}
                        <span className="ml-2 font-normal">{props.subTitle}</span>
                    </h2>
                    <p className="text-lg">{props.desc}</p>
                </div>
            </div>
        </div>
    );
};

export default ContactFind; 