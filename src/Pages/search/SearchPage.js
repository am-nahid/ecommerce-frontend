import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './search.style.css'
import { GenericAddToCartButton } from '../../Components';
import { host } from '../../Components/Constants';

function SearchPage() {
    const [data,setData] = useState([])
    const navi = useNavigate()
    const [nullHandle,setNullHandle] = useState(true)
    const location = useLocation()
    // console.log(location.state);
    // console.log(nullHandle);

    useEffect(()=>{
        const query = location.state
       
       if(!query || data===[]){
        setNullHandle(true) 
        setData([])
       }else{
       

        const LocalAPI =`${host}/api/search?keyword=${query}` 
        axios.get(LocalAPI)
        .then(res=>{
          setData(res.data)
         if(res.data!==[]){
          setNullHandle(false) 
         }
         
        })
        .catch(err=>console.log(err))
       }
      

    },[location.state])

// console.log(data);

    const handleDetail=(item)=>{
      navi(`${item.search_category}/${item.ide}` , {state:item})
  }
  

  return (
    <div className='ecom_cntnr'>
        {
           nullHandle
           ?
           (<div className='search_null'>
            <div>Please provide a valid keyword to search a product</div>
           </div>)
           :
      <div className='FeaturedCntnr'>
        <div className='FeaturedSubCntnr'>
        {
            data.map((item)=>{
            return(
        <div className='Featcard'  key={item._id}>
                 <img  
                 onClick={()=>handleDetail(item)}
                  src={item.image}
                 alt='slow internet'/>
                 <div  
                 onClick={()=>handleDetail(item)} 
                 className='product_title'>{item.p_name}</div>
                 <p>Price: ₹{item.price}</p>
                 {/* <button
                //   onClick={()=>handleCart(item)}
                  >add to cart</button> */}
                  <GenericAddToCartButton item={item}/>
            </div>
        
            )
    })
    }
    </div>
        </div> 
        }
        
    </div>
  )
}

export default SearchPage

