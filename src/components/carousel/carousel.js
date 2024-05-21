import React from "react";
import Slider from "react-slick";
import './carousel.css';
function Fade() {
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    autoplay: true
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <img src={"/images/buildingOne.jpg"} alt = "office_image"/>
        </div>
        <div>
          <img src={"/images/buildingTwo.jpg"} alt = "office_image"/>
        </div>
        <div>
          <img src={"/images/buildingThree.jpg"} alt = "office_image"/>
        </div>
        <div>
          <img src={"/images/buildingFour.jpg"} alt = "office_image"/>
        </div>
        <div>
          <img src={"/images/buildingFive.jpg"} alt = "office_image"/>
        </div>
        <div>
          <img src={"/images/buildingSix.jpg"} alt = "office_image"/>
        </div>
        <div>
          <img src={"/images/buildingSeven.jpg"} alt = "office_image"/>
        </div>
      </Slider>
    </div>
  );
}

export default Fade;
