import './product.css';
import delIcon from './../../assets/images/icon-delete.svg';
import { cartActions } from '../../store/slices/cartSlice';
import { useDispatch } from 'react-redux';

function Product({ name, quantity, img, totalPrice }) {
    const dispatch = useDispatch();
    const clearSingleItem = () => {
        dispatch(cartActions.clearCart(name))
    }

    return(
        <div className='product d-flex align-items-center justify-content-between'>
            <div className='product-image border' style={{ backgroundImage: `url(${img})`, backgroundPosition: "center", backgroundSize: "cover"}}></div>
            <div className='product-detail'>
                <p className='name m-0'>{ name }</p>
                <p className='calculate m-0'>
                    $125 x { quantity } <b>${ 125 * quantity }</b>
                </p>
            </div>
            <div className='delete' onClick={clearSingleItem}>
                <img src={ delIcon } alt='delete icon' />
            </div>
        </div>
    )
}

export default Product;