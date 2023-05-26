import { useState } from "react";
import { FormInput } from '../../components';


const ContactFormValidation = () => {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',

    });

    const inputs = [
        {
            id: 1,
            name: 'firstName',
            type: 'text',
            placeholder: 'First Name',
            required: true,
            pattern: '^[A-Za-z]+$',
            errorMessage: "First Name should be just alphabetic characters and shouldn`t include any special character or number!",
        },
        {
            id: 2,
            name: 'lastName',
            type: 'text',
            placeholder: 'Last Name',
            required: true,
            pattern: '^[A-Za-z]$',
            errorMessage: "Last Name should be just alphabetic characters and shouldn`t include any special character or number!",
        },
        {
            id: 3,
            name: 'email',
            type: 'email',
            placeholder: 'Email Address',
            required: true,
            errorMessage: "Please enter a valid email form !"
        },
        {
            id: 4,
            name: 'subject',
            type: 'text',
            placeholder: 'Subject',

        },

    ];

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form action="#" className="w-full flex flex-col gap-6 ">
                {inputs.map(input => (
                    <FormInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={handleChange}
                    />
                ))}
                <textarea className="border w-full p-5 border-myBorder rounded focus:outline-navBar h-[20vh] resize-none" required></textarea>
                <span className="errorMessage">Can`t be empty</span>
            </form>
        </div>
    );
};

export default ContactFormValidation;