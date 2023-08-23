import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { itemCount } from '../../Utility/reduxToolKit/CartSlice'
import { useNavigate } from 'react-router-dom'
import { GenericAddToCartButton, ImageHandleDetail, TitleHandle } from '../../Components'
import { host } from '../../Components/Constants'

function WProducts() {
    // const count =useSelector(state=>state.productAdd)
    const navi = useNavigate()
    const dispatch = useDispatch()
    const [data,setData]=useState([])
    useEffect(()=>{
        
        const cat = "watches"
        const LocalAPI = `http://localhost:4040/api/product/${cat}`
        const API = `${host}/api/product/${cat}`
        axios.get(API)
        .then((res)=>setData(res.data))
        .catch(err=>console.log(err))
    },[])
    // console.log(data);

    // console.log(count);

    const handleDetail=(item)=>{
        navi(`${item.search_category}/${item.ide}` , {state:item})
    }
  return (
    <div className='ecom_cntnr'>
        {/* <div>FeaturedProducts</div> */}
        <div className='FeaturedCntnr'>
        <div className='FeaturedSubCntnr'>

{
    data.map((item,index)=>{
        return(
            <div className='Featcard'  key={index}>
                 {/* <img onClick={()=>handleDetail(item)} src={item.image} alt='slow internet'/>
                 <div  onClick={()=>handleDetail(item)} className='product_title'>{item.p_name}</div> */}
                 <ImageHandleDetail item={item}/>
                 <TitleHandle item={item}/>
                 <p>Price: ₹{item.price}</p>
                 {/* <button 
                //  onClick={()=>{dispatch(itemCount())}}
                 >add to cart</button> */}
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

export default WProducts