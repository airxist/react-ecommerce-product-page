import './emptycart.css';

function EmptyCart() {
    return (
        <div className='empty-cart d-flex align-items-center justify-content-center '>
            <p className='empty-text text-center text-gray kmed'>
                Your cart is empty
            </p>
        </div>
    )
}

export default EmptyCart;