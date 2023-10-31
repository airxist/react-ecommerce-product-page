import './price.css';

function Price() {
    return (
        <div className='price d-flex align-items-center justify-content-between d-md-block'>
            <div className='discount d-flex align-items-center'>
                <h1 className='new-price'>$125.00</h1>
                <span className='percentage badge text-orange  ms-1'>50%</span>
            </div>
            <p className='old-price text-gray' style={{textDecoration: "line-through"}}>$250.00</p>
        </div>
    )
}

export default Price;