import Rating  from 'react-rating-scale';
import Slider from 'react-carousel-responsive';
import 'react-carousel-responsive/dist/styles.css';

import art1 from "../images/art1.jpg";
import art2 from "../images/art2.jpg";
import art3 from "../images/art3.jpg";
import art4 from "../images/art4.jpg";
import art5 from "../images/art5.jpg";
import art6 from "../images/art6.jpg";
import art7 from "../images/art7.jpg";
import art8 from "../images/art8.jpg";

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

            <div className="art_item">
                <img src={ art5 } />
            </div>

            <div className="art_item">
                <img src={ art6 } />
            </div>

            <div className="art_item">
                <img src={ art7 } />
            </div>

            <div className="art_item">
                <img src={ art8 } />
            </div>
       
    </Slider>
      </div>
    
  )
}

export default Carousel