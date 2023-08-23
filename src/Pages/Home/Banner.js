import React from "react";
import "./banner.style.css";
import bannerImg from "../../assets/banner_img.png";
import Carousel2 from "../../Components/CarouselMui";

function Banner() {
  return (
    <div className="bannerBackground">
      <div className="bannerContent">
        <div className="bannerHead">SALES</div>
        <div className="bannerText">upto 70% sale on the iShop Products</div>
      </div>
      <img src={bannerImg} alt="Server down" className="bannerImg" />
      {/* <Carousel2/> */}
    </div>
  );
}

export default Banner;
