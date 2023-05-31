import { useState } from "react";
import ContactFormValidation from '../formValidation/ContactFormValidation';


const ContactForm = () => {

    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',

    });
    const [errorMessage, setErrorMessage] = useState({});

    const handleChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };
    console.log(values);


    const handleSubmit = (e) => {
        e.preventDefault();
        setErrorMessage(ContactFormValidation(values));
    };

    return (
        <div className="contactForm w-full">
            <form action="" className="contactFormInput w-full flex flex-col gap-6" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-4 lg:flex-row ">
                    <label className="w-full">
                        <input
                            type="text"
                            placeholder='First Name'
                            name='firstName'
                            onChange={handleChange}
                            value={values.firstName}
                            required
                        />
                        <span className="text-[crimson] text-sm hidden">{errorMessage.firstName}</span>
                    </label>
                    <label className="w-full">
                        <input
                            type="text"
                            placeholder='Last Name'
                            name="lastName"
                            onChange={handleChange}
                            value={values.lastName}
                            required
                        />
                        {errorMessage.lastName && <span className="errorMessage">{errorMessage.lastName}</span>}
                    </label>
                </div>

                <label className="w-full">
                    <input
                        type="email"
                        placeholder='Email Address'
                        name="email"
                        onChange={handleChange}
                        value={values.email}
                        required
                    />
                    {errorMessage.email && <span className="errorMessage">{errorMessage.email}</span>}
                </label>

                <label className="w-full">
                    <input
                        type="text"
                        placeholder='Subject (Optional)'
                        name="subject"
                        onChange={handleChange}
                        value={values.subject}
                    />
                </label>

                <div>
                    <textarea className="border w-full text-2xl p-4 border-myBorder rounded focus:outline-navBar focus:bg-[#f3fbfb] h-[20vh] resize-none" placeholder="Type your message"
                        name='message'
                        onChange={handleChange}
                        value={values.message}

                    >

                    </textarea>
                    {errorMessage.message && <span className="errorMessage">{errorMessage.message}</span>}
                </div>

                <button type="submit" className="p-5 text-2xl uppercase font-semibold rounded bg-[#634832] text-[#fff] w-[15rem]">send message</button>

            </form>
        </div>
    );
};

export default ContactForm;