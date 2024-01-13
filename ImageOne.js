import { Parallax } from 'react-parallax';
import Playstation from "../img/playstation.jpg";

const  ImageOne = () => (
    <Parallax className='image' bgImage={Playstation} strength={800}>
        <div className='content'>
            <span className='img-txt'>hope is everything</span>
        </div>
    </Parallax>
);

export default ImageOne;