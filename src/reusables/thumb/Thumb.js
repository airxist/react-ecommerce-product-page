import './thumb.css';
import { useDispatch } from 'react-redux';
import { picActions } from '../../store/slices/picSlice';
import { modalActions } from '../../store/slices/modalSlice';

function Thumb({ img, state, indexNum }) {
    const dispatch = useDispatch();
    const changePic = () => dispatch( picActions.setIndex(indexNum) );

    return (
        <figure className={`thumb rounded-3 ${state}`} onClick={() => {
            changePic();
            dispatch( modalActions.toggleModal("on") );
        }}>
            <img src={ img } alt='thumbnail' />
        </figure>
    )
}

export default Thumb;