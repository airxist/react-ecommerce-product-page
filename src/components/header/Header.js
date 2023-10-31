import './header.css';
import menuIcon from './../../assets/images/icon-menu.svg';
import logo from './../../assets/images/logo.svg';
import Nav from '../nav/Nav';
import Cart from '../cart/Cart';
import { menuActions } from '../../store/slices/menuSlice';
import { useDispatch } from 'react-redux';

function Header() {
    const dispatch = useDispatch();
    const showMenu = () => {
        dispatch( menuActions.toggleOn() );
    }
    return (
        <header className='hero d-flex  align-items-center justify-content-start border-bottom py-md-2'>
            <div className='logo-menu d-flex align-items-center justify-content-between'>
                <img src={ menuIcon } alt='logo' className='menu-icon me-3 d-md-none' onClick={ showMenu } />
                <img src={ logo } alt='logo' />
            </div>
            <Nav />
            <Cart />
        </header>
    )
}

export default Header;