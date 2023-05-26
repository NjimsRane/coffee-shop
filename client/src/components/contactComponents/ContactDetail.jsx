

const ContactDetail = (props) => {
    return (
        <div className="flex flex-col gap-2 shadow-xl p-6 text-[#838383] ">
            <img src={props.img} alt="" />
            <h3 className="font-bold capitalize text-xl ">{props.title}</h3>
            <p >{props.desc}</p>
        </div>
    );
};

export default ContactDetail;