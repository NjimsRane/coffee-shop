function ContactFormValidation(values) {
    let errorMessage = {};
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const namePattern = /^[A-Za-z]+$/;


    if (values.firstName === '') {
        errorMessage.firstName === "First Name should not be empty";
    } else if (!namePattern.test(values.firstName)) {
        errorMessage.firstName = 'First Name should be alphabetic characters and shouldn`t include any special character or numbers!';
    } else {
        errorMessage.firstName = '';
    }

    if (values.lastName === '') {
        errorMessage.lastName === "Last Name should not be empty";
    } else if (!namePattern.test(values.lastName)) {
        errorMessage.lastName = 'Last Name should be alphabetic characters and shouldn`t include any special character or numbers!';
    } else {
        errorMessage.lastName = '';
    }


    if (values.email === '') {
        errorMessage.email === "Email should not be empty";
    } else if (!emailPattern.test(values.email)) {
        errorMessage.email = 'Please enter a valid email form';
    } else {
        errorMessage.email = '';
    }


    if (values.message === '') {
        errorMessage.message === "Your message is required.";
    } else {
        errorMessage.message = '';
    }

    return errorMessage;
};

export default ContactFormValidation;