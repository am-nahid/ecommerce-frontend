import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../Utility/reduxToolKit/CartSlice'
import { toast } from 'react-toastify'

const GenericAddToCartButton=({item})=> {
    const dispatch =useDispatch()
    const token = localStorage.getItem('token')

    const handleCart=(item)=>{ 
        if(token){
            dispatch(addToCart(item))
        }else{
            toast.info("Please login first to enjoy shopping",
            {position: toast.POSITION.TOP_Right})
        }
    }

  return (
    <div>
        <button onClick={()=>handleCart(item)}>Add to cart</button>
    </div>
  )
}

export default GenericAddToCartButton