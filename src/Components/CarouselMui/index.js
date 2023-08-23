// import React from 'react'
// import Carousel from 'react-material-ui-carousel'
// import someImg from '../../assets/banner_img.png'
// import secImg from '../../assets/watch.webp'
// import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';


// function Carousel2() {
//   return (
//     <Carousel>
//       {/* < KeyboardArrowLeftIcon/> */}
//         <img alt='no network' src={someImg}/>
//         <img alt='no network' src={secImg}/>
//         <img alt='no network' src={someImg}/>
//         {/* <KeyboardArrowRightIcon/> */}
//     </Carousel>
//   )
// }

// export default Carousel2
import React from 'react';
import Carousel from 'react-material-ui-carousel';
import sales from '../../assets/sales.png';
import secImg from '../../assets/watch.webp';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import style from './carousel.module.css'

function Carousel2() {
  // const carouselHeight ={height:'26rem', width:'100%'}  // Set your desired height here

  return (
    <Carousel className={style.carouselCntnr}
      autoPlay={true} 
      animation="slide"
      // indicatorContainerProps={{ style: { position: 'absolute', bottom: '20px' } }}
      navButtonsAlwaysVisible
      NextIcon={
        <div className={style.arrowIcon}>
      <KeyboardArrowRightIcon style={{ fontSize: 40 }} />
      </div>}
      PrevIcon={
        <div className={style.arrowIcon}>
      {/* <KeyboardArrowLeftIcon style={{ fontSize: 40, backgroundColor:"transparent !important" }} /> */}
      <KeyboardArrowLeftIcon style={{ fontSize: 40, background: 'transparent' }} />
      </div>
      }
    >
      <img alt='no network' src={sales} className={style.carouselHeight} />
      <img alt='no network' src={secImg} className={style.carouselHeight}/>
      <img alt='no network' src="https://www.boat-lifestyle.com/cdn/shop/files/IM-171_desktop_1440x.jpg?v=1690344706" className={style.carouselHeight} />
    
    </Carousel>
  );
}

export default Carousel2;

