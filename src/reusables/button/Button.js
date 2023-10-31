import './button.css';

function Button({ type, handleClick }) {
    return (
        <button 
            className={`control-btn btn rounded-circle d-flex align-items-center justify-content-center`} 
            type='button'
            onClick={ handleClick }
        >
            { type === 'prev' ? <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg"><path d="M11 1 3 9l8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
                : <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8" stroke="#1D2026" stroke-width="3" fill="none" fill-rule="evenodd"/></svg>
            }
        </button>
    )
}

export default Button;