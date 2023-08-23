import React from "react";
import Banner from "./Banner";
import BestSeller from "./BestSeller";
import './home.css'
import { EcommerceComs, Logo, TopNavigation,Carousel2, LogoMobile, CommonPageHeader } from "../../Components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faClipboardList,
  faEnvelope,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import SignupButton from "../../Components/SignupButton/Signup";
import FeaturedProducts from "./FeaturedProducts";

function Home() {
  return (
    <div>
      {/* <div className="Logo_header_align">
        <div className="sub_Logo_header_align">
        <Logo />
        <div className="HeaderRight">
        
          <EcommerceComs/>
        </div>
        
        </div>
      
      </div>
      <TopNavigation /> */}
      {/* <div className="Logo_web">
        <div className="sub_Logo_header_align">
        <Logo />
        </div>
      
      </div>

      <div className='logo_mobile'>
          <LogoMobile/>
      </div>
     
      <div className='logo_web'>
       <TopNavigation />
       </div> */}
      {/* <Banner /> */}

      {/* <CommonPageHeader/> */}
      {/* <TopNavigation/> */}
      <div className="carousalTop">

      <Carousel2/>
      </div>
      
      <BestSeller />
      <FeaturedProducts/>
      
    </div>
  );
}

export default Home;
