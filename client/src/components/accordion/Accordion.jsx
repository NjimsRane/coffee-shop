import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);


    return (
        <div className="accordion-item   p-4">
            <div className="accordion-title flex justify-between items-center bg-[#F8F9FA] px-[2rem] py-[1.2rem] border-b border-[#e9e9e9] " onClick={() => setIsActive(!isActive)}>
                <div className='font-bold text-[1.3rem]'>{title}</div>
                <div className="cursor-pointer text-4xl aria-expanded=' true'">{isActive ? <FiMinus /> : <FiPlus className='text-[#86858C]' />}</div>
            </div>
            {
                isActive &&
                <div className="accordion-content text-[#86858C] text-2xl p-[1.5rem] break-words leading-8">{content}</div>
            }
        </div>
    );
};

export default Accordion;