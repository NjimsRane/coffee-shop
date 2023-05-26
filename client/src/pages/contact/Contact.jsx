
import { ContactFind, ContactForm, Accordion, ContactAndAboutBanner, ContactFormValidation } from '../../components';
import { banner2, liberty, place, phone, location, mail } from '../../assets';
import { accordionData } from '../../components/accordion/dataAccordion.js';

const Contact = () => {
    return (
        <div>
            <ContactAndAboutBanner
                title='contact'
                img2={banner2}
                subtitle='contact us'
            />
            <div className="container flex flex-col gap-8 py-5 md:mx-auto">
                <div className='flex flex-col gap-6 px-8 md:px-16  md:flex-row'>
                    <ContactFind
                        img={place}
                        title='find us in'
                        subTitle='Greece'
                        desc=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos unde tenetur molestias? Accusamus, aspernatur perferendis,'
                    />
                    <ContactFind
                        img={liberty}
                        title='find us in'
                        subTitle='New york'
                        desc=' Lorem ipsum dolor sit amet consectetur adipisicing elit. Error dignissimos unde tenetur molestias? Accusamus, aspernatur perferendis,'
                    />
                </div>
                <div className='flex flex-col gap-12 px-8 md:px-16 lg:flex-row'>
                    <div className='contactDetailHover'>
                        <div>
                            <div>
                                <a href="tel:+2333440944" rel='noreferrer nopener' target='_blank' aria-label='link to make phone call'>
                                    <img src={phone} alt="phone svg" className="w-[4rem]" />
                                </a>
                                <h3>call center</h3>
                                <p className="text-2xl" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, excepturi aspernatur! Quos officiis eius repellat, a nobis nam blanditiis vitae.</p>
                            </div>
                        </div>

                    </div>

                    <div className='contactDetailHover'>
                        <div >
                            <div>
                                <a href="mailto:rane@mail.com" rel='noreferrer nopener' target='_blank' aria-label='link to send mail'>
                                    <img src={mail} alt="mail svg" className="w-[4rem]" />
                                </a>
                                <h3>mail us</h3>
                                <p className="text-2xl" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, excepturi aspernatur! Quos officiis eius repellat, a nobis nam blanditiis vitae.</p>
                            </div>
                        </div>

                    </div>

                    <div className='contactDetailHover'>
                        <div>
                            <div>
                                <a href="#" rel='noreferrer nopener' target='_blank' aria-label='link to find location'>
                                    <img src={location} alt="location svg" className="w-[4rem]" />
                                </a>
                                <h3>nearest branch</h3>
                                <p className="text-2xl" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, excepturi aspernatur! Quos officiis eius repellat, a nobis nam blanditiis vitae.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col lg:flex-row px-8 md:px-16 gap-10' >
                    <div className='flex-1'>
                        <div className='faqTitle'>
                            <h3 >faq</h3>
                        </div>
                        <div className="accordion flex flex-col gap-4">
                            {accordionData.map(({ title, content, id }) => (
                                <Accordion key={id} title={title} content={content} />
                            ))}
                        </div>
                    </div>
                    <div className='flex-1 flex flex-col gap-8'>
                        <div className='faqTitle'>
                            <h3>contact us</h3>
                        </div>
                        <div action="#" className='flex flex-col gap-8'>
                            <p className='flex gap-4 w-full'>
                                <ContactFormValidation className='w-full' />
                            </p>

                        </div>

                    </div>
                </div>
            </div>

        </div>

    );
};

export default Contact;