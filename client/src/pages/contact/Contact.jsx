import { AiOutlineAccountBook } from 'react-icons/ai';
import { Link } from 'react-router-dom';

import { ContactDetail, ContactFind, ContactForm, Accordion } from '../../components';
import { FaGreaterThan } from 'react-icons/fa';
import { banner2, liberty, place } from '../../assets';

import { accordionData } from '../../components/accordion/dataAccordion.js';

const Contact = () => {



    return (
        <div>

            <div className="banner relative h-[20vh] ">
                <div className='absolute h-full w-full inset-0 bg-[black]/90 '>
                </div>
                <div className='h-full '>
                    <img src={banner2} alt="" className='w-full h-full object-cover' />
                    <div className='absolute w-full top-[50%] translate-y-[-50%] flex flex-col gap-8 text-[#fff] px-8 md:flex-row md:justify-between md:px-16'>
                        <h1 className='text-4xl capitalize font-bold'>contact us</h1>
                        <p className='flex items-center gap-2 capitalize text-lg'>
                            <Link to='/' className='font-bold'>home</Link>
                            <span className='flex items-center gap-2'>
                                <FaGreaterThan className='text-xs font-normal' />
                                <a href="#">contact us</a></span>
                        </p>
                    </div>
                </div>
            </div>
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
                <div className='flex flex-col gap-4 md:px-16 lg:flex-row'>
                    <ContactDetail
                        img={<AiOutlineAccountBook />}
                        title='call center'
                        desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, excepturi aspernatur! Quos officiis eius repellat, a nobis nam blanditiis vitae.'
                    />
                    <ContactDetail
                        img={<AiOutlineAccountBook />}
                        title='mail us'
                        desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, excepturi aspernatur! Quos officiis eius repellat, a nobis nam blanditiis vitae.'
                    />
                    <ContactDetail
                        img={<AiOutlineAccountBook />}
                        title='nearest branch'
                        desc='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, excepturi aspernatur! Quos officiis eius repellat, a nobis nam blanditiis vitae.'
                    />
                </div>
                <div className='flex flex-col md:flex-row md:mx-auto' >
                    <div className='flex-1'>
                        <div>
                            <h3 >faq</h3>
                        </div>
                        <div className="accordion flex flex-col gap-4">
                            {accordionData.map(({ title, content, id }) => (
                                <Accordion key={id} title={title} content={content} />
                            ))}
                        </div>
                    </div>
                    <div className='flex-1'>
                        <h3>contact us</h3>
                        <ContactForm placeholder='First Name' />
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Contact;