import { Link } from 'react-router-dom';

const FreshlyComponents = ({ img, title, subTitle, desc, btn }) => {
    return (
        <div className="relative h-[25rem] flex-1">
            <div className="absolute w-full inset-0 bg-[black]/60 h-full"></div>
            <div className='h-full'>
                <img src={img} alt="place to find us" className="w-full h-full object-cover" />
                <div className="absolute h-fit inset-0 top-[57%]  text-[#fff] left-8 flex flex-col gap-3">
                    <h2 className="capitalize text-3xl font-bold" >
                        {title}
                        <span className="ml-2 font-normal">{subTitle}</span>
                    </h2>
                    <p className='w-[50ch]'>{desc}</p>
                    <Link to='/'>
                        <button className="text-lg w-[10rem] text-navBar p-2 rounded uppercase bg-[#fff] font-bold">{btn}</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default FreshlyComponents;