import { Parallax } from 'react-parallax';
import Earth from "../img/earth.jpg";

const  ImageTwo = () => (
    <Parallax className='image' bgImage={Earth} strength={800}>
        <div className='content'>
            <span className='img-txt'>I am Always Alone</span>
        </div>
    </Parallax>
);

export default ImageTwo;