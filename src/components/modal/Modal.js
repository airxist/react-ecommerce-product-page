import { useSelector } from 'react-redux';
import Pictogram from '../../reusables/pictogram/Pictogram';
import './modal.css';

function Modal() {
    const showModal = useSelector( state => state.modal.showModal );

    return(
        <div className={`modal-board d-none position-absolute top-0 start-0 d-md-flex align-items-center justify-content-center ${ !showModal && "hide-modal "}`}>
            <Pictogram showClose={true} />
        </div>
    )
}

export default Modal;