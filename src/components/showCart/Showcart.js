import EmptyCart from '../empty_cart/EmptyCart';
import FilledCart from '../filled_cart/FilledCart';
import './showcart.css';
import  { useSelector } from 'react-redux';

function Showcart() {
    const showCart = useSelector(state => state.cart.showCart);
    const products = useSelector(state => state.cart.items);

    return (
        <div className={`show-item-cart position-absolute rounded-3 shadow-lg ${showCart ? "show p-3" : null}`}>
            <header className='show-head border-bottom border-secondary'>
                <h5 className='show-head-title'>Cart</h5>
            </header>
            { products.length < 1 ? <EmptyCart /> : <FilledCart />}
            
        </div>
    )
}

export default Showcart;