import React, { Component }  from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import art1 from "../images/art1.png";
import art2 from "../images/art2.png";
import art3 from "../images/art3.jpg";
import art4 from "../images/art4.jpg";

import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true
  };
  return (
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
                    <h3>A 19th Century Gentleman</h3>
                    <p>A gentleman I tried to draw give a low-key Rembrandt vibe. 
                    The colors of the background, the hair, and the accessories were chosen with Rembrandt’s style in mind.</p>
                    <p>18th of September 2020</p>
                </div>
            </div>

            <div className="art_item">
                <img src={ art4 } />
                <div>
                    <h3>A 19th Century Gentleman</h3>
                    <p>A gentleman I tried to draw give a low-key Rembrandt vibe. 
                    The colors of the background, the hair, and the accessories were chosen with Rembrandt’s style in mind.</p>
                    <p>18th of September 2020</p>
                </div>
            </div>

       
    </Slider>
  );
}