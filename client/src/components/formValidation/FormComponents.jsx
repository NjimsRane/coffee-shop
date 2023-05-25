
import { ImFacebook, ImGoogle } from 'react-icons/im';

const FormComponent = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center gap-2'>
                <span className='lignsDivider'></span>
                <span className='uppercase text-[#9F9E9E]'>or</span>
                <span className='lignsDivider'></span>
            </div>
            <div className='flex flex-col gap-4 text-[#fff] text-center'>
                <a href="#" className='otherLinks bg-[#4267B2] '>
                    <span className='text-2xl font-bold'>Continue with Facebook</span>
                    <span className='text-3xl font-bold'>
                        <ImFacebook />
                    </span>
                </a>
                <a href="#" className='otherLinks bg-[#DB4437] '>
                    <span className='text-2xl font-bold'>Continue with Google</span>
                    <span className='text-2xl font-bold'>
                        <ImGoogle />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default FormComponent;