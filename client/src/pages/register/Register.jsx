import { mug, img16 } from '../../assets';
import { FormIntro, RegisterValidation } from '../../components';

const Register = () => {
    return (
        <div className='relative'>

            <div className="container px-4 md:p-0 max-w-[70rem] flex flex-col-reverse mx-auto md:mt-8 md:flex-row-reverse">
                <FormIntro
                    cover={img16}
                    img1={mug}
                    title='hello world'
                    desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque incidunt voluptatum consectetur amet odio cupiditate, nulla temporibus voluptates quis debitis,'
                />

                <div className='bg-[#F0F2F3] px-4 flex-1'>
                    <h2 className='my-10 mx-8 text-4xl font-[700] text-[#18181D]'>Sign Up</h2>
                    <RegisterValidation />
                </div>
            </div>

        </div>
    );
};


export default Register;