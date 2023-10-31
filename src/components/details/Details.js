import './details.css';
import Price from '../price/Price';
import Order from '../order/Order';

function Details() {
    return (
        <div className='details p-3 px-md-5 pt-md-5'>
            <h6 className='subtitle text-uppercase text-orange'>sneakers company</h6>
            <h1 className='main-title'>Fall Limited Edition Sneakers</h1>
            <p className='brief text-gray'>
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