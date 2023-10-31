import './nav.css';
import menuCloseIcon from './../../assets/images/icon-close.svg';
import { useDispatch, useSelector } from 'react-redux';
import { menuActions } from '../../store/slices/menuSlice';

const links = [ "Collection", "Men", "Women", "About", "Contact"];


function Nav() {
    const showMenu = useSelector( state => state.menu.showMenu );
    const dispatch = useDispatch();
    const hideMenu = () => {
        dispatch( menuActions.toggleOff() );
    }

    return (
        <nav className={`p-0 ms-4 ${ showMenu && "show" }`}>
            <ul className='list-group list-group-horizontal-md list-group-flush'>
                <div className='nav-head ps-3 py-4 d-md-none'>
                    <img src={ menuCloseIcon } alt='close menu' onClick={ hideMenu } />
                </div>
                {
                    links.map(link => {
                        return <li 
                            className='list-group-item border-0 kmed'>
                                <a href={ link } className='text-gray' 
                                    style={{ textDecoration: "none" }}
                                    onClick={ e => e.preventDefault() }
                                >
                                    { link }
                                </a>
                        </li>
                    })
                }
            </ul>
        </nav>
    )
}

export default Nav;