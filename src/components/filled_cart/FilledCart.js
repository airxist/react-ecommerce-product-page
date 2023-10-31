import { useSelector } from 'react-redux';
import Product from '../product/Product';
import './filledcart.css';

function FilledCart() {
    const products = useSelector(state => state.cart.items);
    
    return (
        <div className='filled-cart d-flex flex-column-reverse'>
            <button className='btn bg-orange text-light w-100 mt-4' type='button'>
                checkout
            </button>
            {
                products.map(product => {
                    return <Product key={product.name} {...product} />
                })
            }
        </div>
    )
}

export default FilledCart;