import { mug2, coffee, cup1, cup2, cup3, mug } from '../../assets';
import { IllustrationComponents } from '../../components';


const Illustrations = () => {
    return (
        <div className='grid grid-cols-1  gap-8 md:grid-cols-3 lg:grid-cols-6 '>
            <IllustrationComponents
                illustration={mug}
                desc='cafe latte'
            />
            <IllustrationComponents
                illustration={coffee}
                desc='mocha'
            />
            <IllustrationComponents
                illustration={mug2}
                desc='ice coffee'
            />
            <IllustrationComponents
                illustration={cup1}
                desc='expresso'
            />
            <IllustrationComponents
                illustration={cup3}
                desc='cappucino'
            />
            <IllustrationComponents
                illustration={cup2}
                desc='arabica'
            />
        </div>
    );
};

export default Illustrations;