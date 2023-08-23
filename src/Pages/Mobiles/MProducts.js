import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
// import {useHistory} from 'react-router'
import { addToCart } from '../../Utility/reduxToolKit/CartSlice'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GenericAddToCartButton, ImageHandleDetail, TitleHandle } from '../../Components'
import { host } from '../../Components/Constants'

function MProducts() {
    // const count =useSelector(state=>state.productAdd)
    const navi =useNavigate()
    const dispatch = useDispatch()
    const [data,setData]=useState([])
    // const history = useHistory()

    useEffect(()=>{
        const cat = "mobiles"
 
        const LocalAPI = `http://localhost:4040/api/product/${cat}`
        const API = `${host}/api/product/${cat}`
        axios.get(API)
        .then((res)=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
    // console.log(data);

    // console.log(count);
    const handleCart=(item)=>{
        // toast.success('Item Added to Cart !', {
        //     position: toast.POSITION.TOP_RIGHT
        // });
        dispatch(addToCart(item))
        // const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        // const updatedCart = [...existingCart, item];
        // localStorage.setItem("cart", JSON.stringify(updatedCart))
        // console.log(item);
      
    }

    // const handleDetail=(item)=>{
    //     navi(`${item.search_category}/${item.ide}` , {state:item})
    // }


  return (
    <div className='ecom_cntnr'>
        {/* <div>FeaturedProducts</div> */}
        <div className='FeaturedCntnr'>
        <div className='FeaturedSubCntnr'>

{
    data.map((item,index)=>{
        return(
            <div className='Featcard'  key={index}>
                 {/* <img  onClick={()=>handleDetail(item)} src={item.image} alt='slow internet'/> */}
                 <ImageHandleDetail item = {item}/>
                 {/* <div  onClick={()=>handleDetail(item)} className='product_title'>{item.p_name}</div> */}
                 <TitleHandle item = {item}/>
                 <p>Price: ₹{item.price}</p>
                 {/* <button onClick={()=>handleCart(item)}>add to cart</button> */}
                 <GenericAddToCartButton item={item}/>
            </div>
       
        )
    })
}
</div>
</div>
    </div>
  )
}

export default MProducts