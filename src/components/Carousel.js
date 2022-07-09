import Rating  from 'react-rating-scale';
import Slider from 'react-carousel-responsive';
import 'react-carousel-responsive/dist/styles.css';

import art1 from "../images/art1.png";
import art2 from "../images/art2.png";
import art3 from "../images/art3.jpg";
import art4 from "../images/art4.jpg";

const Carousel = () => {
    var settings = {
        autoplay: true
    };
  return (
      <div>
      <Slider {...settings}>
        
            <div className="art_item">
                <img src={ art1 } />
            </div>

            <div className="art_item">
                <img src={ art2 } />
            </div>

            <div className="art_item">
                <img src={ art3 } />
            </div>

            <div className="art_item">
                <img src={ art4 } />
            </div>

       
    </Slider>
      </div>
    
  )
}

export default Carousel