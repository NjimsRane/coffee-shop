const ContactForm = (props) => {
    return (
        <div className="contactForm">
            <input className="border w-full p-5 border-myBorder rounded focus:outline-navBar"
                placeholder={props.placeholder} />
        </div>
    );
};

export default ContactForm;