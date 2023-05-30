import { shop1, shop2 } from '../../assets';
import { FreshlyComponents } from '../../components';

const FreshlyPicked = () => {
    return (
        <div className='flex flex-col gap-8 md:flex-row'>
            <FreshlyComponents
                img={shop1}
                title='freshly picked'
                subTitle='Robusta Roasted'
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, provident.'
                btn='show now'

            />
            <FreshlyComponents
                img={shop2}
                title='freshly picked'
                subTitle='Mocha'
                desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi, provident.'
                btn='show now'
            />
        </div>
    );
};

export default FreshlyPicked

