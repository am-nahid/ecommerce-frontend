import React, { useEffect, useState } from 'react'
import './Cart.style.css'
import { CommonPageHeader, Logo ,LogoMobile,TopNavigation} from '../../Components'
import {useSelector, useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart, clearCart, decreaseCart, getTotal, orderPlaced, removeFromCart, userLoggedOut } from '../../Utility/reduxToolKit/CartSlice'
import emptyCart from '../../assets/empty-cart.png'
import axios from 'axios'
import { host } from '../../Components/Constants'

function ItemsInCart() {
  const cart =useSelector(state=>state.productAdd)
  const dispatch = useDispatch()
const navi = useNavigate()

const cartCount = cart.cartItems.length
  // console.log(cart.cartItems);

  // const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  // console.log(cartItems);
  // console.log(typeof(cartItems));
  // console.log(individualBtn);

  useEffect(()=>{
    dispatch(getTotal())
    // console.log(cart);
  },[cart])

  const handleClearCart = ()=>{
    dispatch(clearCart())
  }

  const handleAdd=(item)=>{
    dispatch(addToCart(item))
  
    // const newCounter=item.rating.cart_count
    // setIndividualBtn(newCounter)
 }
 const handleLess=(item)=>{
   dispatch(decreaseCart(item))
    // dispatch(getTotal())
 }

 const handleRemove=(item)=>{
  dispatch(removeFromCart(item))
 }

 const handleCheckOut=()=>{
//  navi('/')
//  console.log(cart);
//  useEffect(()=>{
  
  const localAPI = 'http://localhost:4040/product/order-add'
  const API = `${host}/product/order-add`
  
axios.post(API,cart)
dispatch(orderPlaced())
//  },[cart])
// console.log(cart);
 }
  return (
    <div>
   {/* <CommonPageHeader/> */}
   <div className='ecom_cntnr'>
   {
   (cartCount===0 ) 
   ?
    (
    <div className='empty_cart_disp'>
    


  {/* <img src='https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png' /> */}
  <img src={emptyCart} />
  <div className='empty_cart_text_right'>
  <h3>Hey, it feels so light!</h3> 
<p>There's nothing in your cart. Let's add some items.</p>


<button className='explore_btn' onClick={()=>navi('/')}>Explore</button>
</div>
</div>)
:
(
<div className='cart_container'>
  {/* <div className='cart_cntr'>
    <div className='cart_sub_cntnr'>
      <div className='items_list'> */}

{/* {
  cartItems.map((item,index)=>{
    return(
      <div key={item.ide} className='item_card'>
        
        <img alt = 'no internet' src={item.image}/>
       <div className='item_card_right'>
          <div>{item.p_name}</div>
          <div>{item.price}</div>
          <button onClick={handleLess}>-</button>
          <div>{item.rating.cart_count}</div>
          <button onClick={()=>handleAdd(item)}>+</button>
       </div>
      </div>
    )
  })
} */}
{/* </div> */}
<h2>Shopping Cart</h2>
<div className='titles'>
  <h3 className='product-title'>Product</h3> 
  <h3 className='product-Price'>Price</h3> 
  <h3 className='product-Quantity'>Quantity</h3> 
  <h3 className='total'>Total</h3> 
</div>
<div className='cart-items'>
  {cart.cartItems?.map(cartItem=>{
    return(
      <div className='cart-item' key={cartItem.ide}>
        <div className='cart-product'>
          <img src={cartItem.image} alt={cartItem.name}/>
          <div>
            <h3>{cartItem.p_name}</h3>
            <p>{cartItem.title}</p>
            <button onClick={()=>handleRemove(cartItem)}>Remove</button>
            </div>
        </div>
        <div className='cart-product-price'>₹ {cartItem.price}</div>
        <div className='cart-product-quantity'>
          <button className='addbtn' onClick={()=>handleLess(cartItem)}>-</button>
          <div className='count'>{cartItem.cartQuantity}</div>
          <button className='addbtn'  onClick={()=>handleAdd(cartItem)}>+</button>
        </div>
        <div className='cart-product-total-price'>₹ {cartItem.price * cartItem.cartQuantity}</div>
      </div>
    )
  })}

</div>
<div className='cart-summary'>
  <button onClick={handleClearCart} className='clear-cart'>Clear Cart</button>
  <div className='cart-checkout'>
    <div className='sub-total'>
      <span>Sub total</span>
      <span className='amount'>₹ {cart.cartTotalAmount}</span>
      <button onClick={handleCheckOut}>Check Out</button>
    </div>
    
  </div>
</div>
</div>
// </div>
// </div>
)
   }

      {/* <div>{count2}</div> */}
  {/* <button onClick={handleLess}>-</button>
            <button onClick={handleAdd}>+</button>*/}
      </div> 
      </div>
  )
}

export default ItemsInCart