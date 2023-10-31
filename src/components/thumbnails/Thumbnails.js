import './thumbnails.css';
import t_0 from './../../assets/images/image-product-1-thumbnail.jpg';
import t_1 from './../../assets/images/image-product-2-thumbnail.jpg';
import t_2 from './../../assets/images/image-product-3-thumbnail.jpg';
import t_3 from './../../assets/images/image-product-4-thumbnail.jpg';
import Thumb from '../../reusables/thumb/Thumb';
import { useSelector } from 'react-redux';

const thumbnail = [ t_0, t_1, t_2, t_3 ];

function Thumbnails() {
    const currentIndex = useSelector(state => state.pic.index);
    
    return (
        <div className='thumbnails mt-5 d-none d-md-flex align-items-center justify-content-between'>
            {
                thumbnail.map((thumb, thumbIndex) => {
                    let classToAdd = 'inactive';
                    if( thumbIndex === currentIndex ) {
                        classToAdd = 'active';
                    }
                    return <Thumb 
                        key={thumbIndex}
                        img={thumb}
                        state={ classToAdd }
                        indexNum={ thumbIndex }
                    />
                })
            }
        </div>
    )
}

export default Thumbnails;
export { thumbnail };