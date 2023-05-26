import { useState } from "react";


const FormInput = (props) => {
    const [focused, setFocused] = useState(false);
    // destructure the props
    const { onChange, errorMessage, id, ...inputProps } = props;

    const handleFocus = (e) => {
        setFocused(true);
    };

    return (
        <div className="formInput">
            <label>
                <input
                    {...inputProps}
                    onChange={onChange}
                    onBlur={handleFocus}
                    onFocus={() => inputProps.name === 'Confirm Password' && setFocused(true)}
                    focused={focused.toString()}

                    className='w-full py-3 px-2 text-[#6e6e6e] text-base bg-[#fff] focus:border-2 focus:border-[#634832] focus:outline-none rounded'
                />
                <span className="text-[crimson] text-sm hidden">{errorMessage}</span>
            </label>
        </div>
    );
};

export default FormInput;