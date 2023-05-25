import { FormComponents, FormInput } from '../../components';
import { Link } from 'react-router-dom';

import { useState } from 'react';



const LoginValidation = () => {
    const [values, setValues] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',

    });

    const inputs = [
        {
            id: 1,
            name: 'username',
            type: 'text',
            placeholder: 'Username',
            errorMessage: 'Invalid user',
            required: true,
            pattern: '^[A-Za-z0-9]{3,16}$'
        },

        {
            id: 2,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage: 'Wrong password',
            required: true,
            pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$'
        },

    ];

    const handleChange = (e) => {
        // target.name are the names inside inputs
        // target.value are the value inside input when user type
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    return (
        <div>
            <form action="#" className='w-full flex flex-col gap-6 px-8 py-2'>

                {inputs.map(input => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={handleChange}
                    />
                ))}
                <div className='text-center'>
                    <button type='submit' className='bg-[#634832] capitalize px-6 py-2 text-xl text-[#fff] font-bold rounded'>log in</button>
                </div>
                <FormComponents />
                <div className='text-center space-x-2'>
                    <span className='text-[#838383]'>Don`t have an account?</span>
                    <Link to='/register' className='underline capitalize font-bold text-[#18181D]' >sign up</Link>
                </div>
            </form>
        </div>
    );
};

export default LoginValidation;