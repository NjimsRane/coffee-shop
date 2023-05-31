import { ProductBtn } from '../../components';
import { formatCurrency } from '../../utilities/formatCurrency';

const ProductsDesc = ({ productName, productDesc, productPrice, productDiscount }) => {
    return (
        <div className='flex flex-col gap-4'>
            <h3 className='text-navBar capitalize font-semibold text-xl'>{productName}</h3>
            <p className='text-[#6e6e6e] text-lg w-fit'>{productDesc}</p>
            <div className='flex items-center justify-between'>
                <p className='flex flex-col font-bold'>
                    <span>{formatCurrency(productPrice)}</span>
                    <del className='text-[#634832] text-sm'>{productDiscount && formatCurrency(productDiscount)}</del>
                </p>
                <ProductBtn />
            </div>
        </div>
    );
};

export default ProductsDesc;