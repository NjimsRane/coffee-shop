import storeItems from '../../data/items.json';
import { CartComponents } from '../../components';


const Shop = () => {
    return (
        <div className="md:px-16 px-4 flex flex-col gap-8">
            <h1 className='text-6xl capitalize text-navBar font-bold'>store</h1>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                {storeItems.map(item => (
                    <div key={item.id}>
                        <CartComponents {...item} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Shop;