import './cart.css';
import avatar from './../../assets/images/image-avatar.png';
import cart_icon from './../../assets/images/icon-cart.svg';
import { useSelector, useDispatch } from 'react-redux';
import Showcart from '../showCart/Showcart';
import { cartActions } from '../../store/slices/cartSlice';


function Cart() {
    const products = useSelector(state => state.cart.items);
    const dispatch = useDispatch();

    return(
        <div className='cart d-flex align-items-center justify-content-between ms-auto'>
            <div className='cart-div position-relative'>
                <span className='total-item badge rounded-pill position-absolute top-0 start-100 translate-middle'>
                    { products.length }
                </span>
                <img src={cart_icon} alt='cart icon' className='img-fluid' onClick={() => dispatch(cartActions.showCart())} />
                <Showcart />
            </div>

            <figure className='avatar ms-3 rounded-circle' style={{width: `${50}px`, height: `${50}px`}}>
                <img src={avatar} alt='avatar' className='img-fluid' />
            </figure>
        </div>
    )
}

export default Cart;

