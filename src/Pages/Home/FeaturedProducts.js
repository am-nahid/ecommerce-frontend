

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { itemCount } from '../../Utility/reduxToolKit/CartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GenericAddToCartButton } from '../../Components';
import { host, localHost } from '../../Components/Constants';
import { useNavigate } from 'react-router-dom';

function FeaturedProducts() {
    // const count =useSelector(state=>state.productAdd)
    const navi = useNavigate()
    const dispatch = useDispatch()
    const [data,setData]=useState([])
    useEffect(()=>{
    
        // const localAPI = "http://localhost:4040/user/product/mobiles"
        // const localAPI2 = "http://localhost:4040/user/api"
        const API = `${host}/api/products`
        axios.get(API)
        .then((res)=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
    // console.log(data);

const handleDetail=(item)=>{
  navi(`${item.category}/${item.search_category}/${item.ide}` , {state:item})
}

const handleCart=()=>{
    toast.success('Item Added to Cart !', {
        position: toast.POSITION.TOP_RIGHT
    }); 
}
  
  return (
    <div>
        {/* <div>FeaturedProducts</div> */}
        <div className='FeaturedCntnr'>
        <div className='FeaturedSubCntnr'>
      
        {
              data.filter(item=>item.ide>=1 && item.ide<=5).map((item, itemIndex) => (
                <div key={itemIndex} className="Featcard">
                    {/* {console.log(item)} */}
                  <img onClick={()=>handleDetail(item)}  src={item.image} alt="Product" />
                  <div onClick={()=>handleDetail(item)} className="product_title">{item.p_name}</div>
                  <p>Price: ₹{item.price}</p>
                  {/* <button onClick={()=>handleCart(item)} >Add to Cart</button> */}
                  <GenericAddToCartButton item={item}/>
                </div>
              ))
              }
            
           
          </div>

</div>
</div>
   
  )
}

export default FeaturedProducts