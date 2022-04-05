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
                <div>
                    <h3>A Lady</h3>
                    <p>One of the first times trying to incorporate outlines to characters.</p>
                    <p>7th of January 2021</p>
                </div>
            </div>

            <div className="art_item">
                <img src={ art2 } />
                <div>
                    <h3>A 19th Century Gentleman</h3>
                    <p>A gentleman I tried to draw give a low-key Rembrandt vibe. 
                    The colors of the background, the hair, and the accessories were chosen with Rembrandt’s style in mind.</p>
                    <p>18th of September 2020</p>
                </div>
            </div>

            <div className="art_item">
                <img src={ art3 } />
                <div>
                    <h3>A Gentleman</h3>
                    <p>I was reading a book called “Draw, A Graphic Guide To Life Drawing” written by Da- vid Hedderman. I wanted the re-draw one of the featured works. 
                    The piece I selected is from the “Erasers” section.</p>
                </div>
            </div>

            <div className="art_item">
                <img src={ art4 } />
                <div>
                    <h3>Crazy Lady</h3>
                    <p>Just a lady who happens to be crazy.</p>
                    <p>7th of February 2020</p>
                </div>
            </div>

       
    </Slider>
      </div>
    
  )
}

export default Carousel