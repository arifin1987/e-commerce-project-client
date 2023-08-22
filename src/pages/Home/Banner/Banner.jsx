import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '/img/img1.avif'
import img2 from '/img/img2.avif'
import img3 from '/img/img3.jpg'
import img4 from '/img/img4.avif'


const Banner = () => {
    return (
        <Carousel>
        <div className='w-3/4 mx-auto'>
            <img src={img1} />
            
        </div>
        <div className='w-3/4 mx-auto'> 
            <img src={img2} />
            
        </div>
        <div className='w-3/4 mx-auto'>
            <img src={img3} />
            
        </div>
        <div className='w-3/4 mx-auto'>
            <img src={img4} />
            
        </div>
    </Carousel>
    );
};

export default Banner;