import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { CommonPageHeader, GenericAddToCartButton } from '../../Components';
import './productDetail.style.css'
import {useSelector, useDispatch} from 'react-redux'
import { itemCount } from '../../Utility/reduxToolKit/CartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { host } from '../../Components/Constants';

function ProductDetails() {
  const [data,setData]=useState([])
const location = useLocation()
const dispatch = useDispatch()
const route = location.state.category

useEffect(()=>{

const API = `${host}/api/product/${route}`
const Api = `https://iqoo-server.vercel.app/user/product/${route}`
// console.log(route);
axios.get(API)
.then(res=>setData(res.data))
.catch(err=>console.log(err))
},[location.state])

// console.log(location.state);
const handleCart=()=>{
  toast.success('Item Added to Cart !', {
      position: toast.POSITION.TOP_RIGHT
  });
  // dispatch(itemCount())

}

  return (
    <div>
        {/* <CommonPageHeader/> */}
        <div className='ecom_cntnr '>
        <div className='PD_title'>{location.state.p_name}</div>
        <div className='PDFlex'>

            <div className='detail_cntnr'>
            <div className='pd-img-cntnr'>
            <img src={location.state.image} alt='no internet' className='pDImg'/>
            </div>
            <div className='pd_text_cntnr'>
            <div className='pd_text_sub_cntnr'>
              
            <div className='pd_text-title'>{location.state.title}</div>
            <div>Price: ₹ {location.state.price}</div>
            <div>Rating: {location.state.rating.rate}</div>
            <div>Quantity Available: {location.state.rating.count}</div>
            {/* <button className='addCartBtn' onClick={handleCart}>Add to cart</button> */}
            <GenericAddToCartButton item={location.state}/>
            
           
            </div>
            </div>
            </div>

           
        </div>
        </div>
       <div className='pd_hr_cntr'>  <hr className='pd_hr'/></div>
          <div className='similar-prod'>Similar Products</div>
        <div className='PD-FeaturedCntnr'>
      
        <div className='FeaturedSubCntnr'>
        
        {
          data.filter(item=>item.ide!== location.state.ide ).slice(0,4).map((item,index)=>{
            return(
              
              <div className='Featcard'  key={item.ide}>
                {/* {console.log(index)} */}
              <div className='Featcard'  >

              
              <img 
              // onClick={()=>handleDetail(item)}
               src={item.image} alt='slow internet'/>
               

              <div
                // onClick={()=>handleDetail(item)} 
                className='product_title'>{item.p_name}</div>
              <p>Price: ₹{item.price}</p>
              {/* <button
              //  onClick={()=>{dispatch(itemCount())}}
               >add to cart</button> */}
                <GenericAddToCartButton item={item}/>
         </div>
         </div>
            )
          }
          )
        }
        </div>
        </div>
    </div>
  )
}

export default ProductDetails