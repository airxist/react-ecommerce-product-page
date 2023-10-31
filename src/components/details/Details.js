import './details.css';
import Price from '../price/Price';
import Order from '../order/Order';

function Details() {
    return (
        <div className='details p-3 px-md-5 pt-md-5'>
            <small className='subtitle text-uppercase text-orange kbold'>sneakers company</small>
            <h1 className='main-title kbold'>Fall Limited Edition Sneakers</h1>
            <p className='brief text-gray kreg'>
                This low-profile sneakers are your perfect casual wear
                companion. Featuring a durable rubber outer sole, they'll
                withstand everything the weather can offer.
            </p>
            <Price />
            <Order />
        </div>
    )
}

export default Details;