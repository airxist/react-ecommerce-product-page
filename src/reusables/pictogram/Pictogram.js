import './pictogram.css';
import Button from '../button/Button';
import product1 from './../../assets/images/image-product-1.jpg';
import product2 from './../../assets/images/image-product-2.jpg';
import product3 from './../../assets/images/image-product-3.jpg';
import product4 from './../../assets/images/image-product-4.jpg';
import Thumbnails from '../../components/thumbnails/Thumbnails';
import { useSelector, useDispatch } from 'react-redux';
import { picActions } from '../../store/slices/picSlice';
import closeModal from './../../assets/images/icon-close.svg';
import { modalActions } from '../../store/slices/modalSlice';

const backgroudImages = [ product1, product2, product3, product4 ];


function Pictogram({ showClose}) {
    const index = useSelector(state => state.pic.index);
    const dispatch = useDispatch();
    
    return (
        <div className='pictogram'>
            {
                showClose && <button className='closeModal btn ms-auto d-block' onClick={() => {
                    dispatch( modalActions.toggleModal("off") )
                }}>
                    <img src={ closeModal } alt='close Modal' />
                </button>
            }
            <div className='frame rounded-3 position-relative' style={{
                backgroundImage: `url(${backgroudImages[index]})`
            }}>
                <Button 
                    type="prev" 
                    handleClick={() => { dispatch( picActions.prevPic( backgroudImages.length - 1 ) ) }}
                />
                <Button 
                    type="next" 
                    handleClick={() => { dispatch( picActions.nextPic( backgroudImages.length - 1 ) ) }}
                />
            </div>
            <Thumbnails />
        </div>
    )
}

export default Pictogram;