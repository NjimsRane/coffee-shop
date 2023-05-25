

import { Link } from 'react-router-dom';
import { useState } from 'react';
import { FormComponents, FormInput } from '../../components';



const RegisterValidation = () => {
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
            errorMessage: 'Username should be 3-16 characters and shouldn`t include any special character!',
            required: true,
            pattern: '^[A-Za-z0-9]{3,16}$'
        },
        {
            id: 2,
            name: 'email',
            type: 'email',
            placeholder: 'Email',
            errorMessage: 'Please enter a valid email',
            required: true,
        },
        {
            id: 3,
            name: 'password',
            type: 'password',
            placeholder: 'Password',
            errorMessage: 'Password should be 8-20 characters and includes at least 1 letter ,1 number and 1 special character',
            required: true,
            pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$'
        },
        {
            id: 4,
            name: 'confirmPassword',
            type: 'password',
            placeholder: 'Confirm Password',
            errorMessage: 'Passwords don`t match !',
            required: true,
            pattern: values.password
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
                    <button type='submit' className='bg-[#634832] capitalize px-6 py-2 text-xl text-[#fff] font-bold rounded'>sign up</button>
                </div>
                <FormComponents />
                <div className='text-center space-x-2'>
                    <span className='text-[#838383]'>Already have an account?</span>
                    <Link to='/login' className='underline capitalize font-bold text-[#18181D]' >login</Link>
                </div>
            </form>
        </div>
    );
};

export default RegisterValidation;