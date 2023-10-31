import './order.css';
import minus from './../../assets/images/icon-minus.svg';
import plus from './../../assets/images/icon-plus.svg';
import cart from './../../assets/images/icon-cart.svg';
import { useSelector,useDispatch  } from 'react-redux';
import { cartActions } from '../../store/slices/cartSlice';
import productImage from './../../assets/images/image-product-1-thumbnail.jpg';

function Order() {
    const dispatch = useDispatch();
    const total = useSelector(state => state.cart.total);           
    let quantity = useSelector(state => state.cart.quantity);           
    const increase = () => dispatch(cartActions.increment());
    const decrease = () => dispatch(cartActions.decrement());
    const addToCArt = () => {
        dispatch(cartActions.addToCart({
            name: "Fall Limited Edition Sneakers",
            quantity: quantity += total,
            img: productImage,
        }))
    }
    
    return (
        <div className='control-order pb-5 pb-md-0 d-md-flex align-items-stretch justify-content-around'>
            <div className='rounded-2 p-2 quantity bg-gray d-flex align-items-center justify-content-between'>
                <span className='badge minus' onClick={decrease}>
                    <img src={ minus } alt='minus' />
                </span>
                <h4 className='quantity-digit kbold'>{ total }</h4>
                <span className='badge plus' onClick={increase}>
                    <img src={ plus } alt='minus' />
                </span>
            </div>
            <button className='add-to-cart kreg p-2 btn d-flex align-items-center justify-content-center bg-orange w-100 text-light mt-3 mt-md-0' type='button'
                onClick={ addToCArt }
            >
                <img src={ cart } alt='cart' className='me-3' />
                Add to cart
            </button>
        </div>
    )
}

export default Order;