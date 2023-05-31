import { GalleryForm } from '../../layouts';
import { FormIntro, LoginValidation } from '../../components';
import { mug, img19 } from '../../assets';

const Login = () => {
    return (
        <div className='flex flex-col justify-between h-screen'>

            <div className="px-4 md:p-0 max-w-[70rem] flex flex-col  md:mt-8 md:flex-row md:self-center ">
                <FormIntro
                    cover={img19}
                    img1={mug}
                    title='welcome back'
                    desc='Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque incidunt voluptatum consectetur amet odio cupiditate, nulla temporibus voluptates quis debitis,'
                />
                <div className='bg-[#F0F2F3] px-4 flex-1'>
                    <h2 className='my-10 mx-8 text-4xl font-[700] text-[#18181D]'>Log in</h2>
                    <LoginValidation />
                </div>
            </div>
            <GalleryForm />

        </div>
    );

};
export default Login;