import { Footer, Gallery } from '../../layouts';
import { FormIntro, LoginValidation } from '../../components';
import { mug, img19 } from '../../assets';

const Login = () => {
    return (
        <div >

            <div className="container px-4 md:p-0 max-w-[70rem] flex flex-col mx-auto md:mt-8 md:flex-row ">
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
            <Gallery />
            <Footer />
        </div>
    );

};
export default Login;