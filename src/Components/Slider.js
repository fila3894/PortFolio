import React from 'react';
//slick
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
//css
import "../Css/Slider.css"

import 프로필1 from '../img/profile.PNG';
import 프로필2 from '../img/profile2.PNG';
import 프로필3 from '../img/profile3.PNG';
// 이미지
function SimpleSlider(){
    var settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        className: "slide"
      };
    return (
    <Slider {...settings}>
        <div>
            <img src={ 프로필1 }/>
        </div>
        <div>
            <img src={ 프로필2 }/>  
        </div>
        <div>
            <img src={ 프로필3 }/>
        </div>
    </Slider>
    );
}
export default SimpleSlider;

