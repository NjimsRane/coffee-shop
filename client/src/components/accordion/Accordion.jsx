import { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';

const Accordion = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
    console.log(isActive);

    return (
        <div className="accordion-item  border-b border-[#e9e9e9] p-4">
            <div className="accordion-title flex justify-between items-center" onClick={() => setIsActive(!isActive)}>
                <div className='font-bold text-xl'>{title}</div>
                <div className='cursor-pointer text-4xl'>{isActive ? <FiMinus /> : <FiPlus />}</div>
            </div>
            {isActive &&
                <div className="accordion-content text-[#838383] text-lg">{content}</div>
            }
        </div>
    );
};

export default Accordion;