import React, {useState} from 'react'
import { FaUser, FaShoppingCart, FaSearch} from "react-icons/fa";
import style from './logoMobile.module.css'
import {NavLink, useNavigate} from 'react-router-dom'

import SignupButton from '../SignupButton/Signup';
import LoginButton from '../LoginButton';
import { useSelector } from 'react-redux';


function LogoMobile() {
  const [show,setShow]= useState(false)
  const navi =useNavigate()

 

  return (
    <div>
      <div className={style.LogoMV}>
      <div className='iShopLogo'>iQoo Store</div>
      <div className={style.right}>
   <div onClick={()=>navi('/items')} className={style.cartCntnr}><div className={style.shop_cart}> <FaShoppingCart/> </div>&nbsp;<span><span>0</span> item</span></div> 
        <div onClick={()=>setShow(!show)} className={style.hamburgerIcon}>
            <div className={style.line}></div>
            <div className={style.line}></div>
            <div className={style.line}></div>
        </div>
        </div>
</div>
        {show &&
        <div className={style.mobileDropdown} >
            <div ><FaUser/> <span>Login</span></div>
            <div>
            <div className={style.searchCntnr}>
                    <button className={style.searchBtn}><FaSearch/></button>
                    <input type="text" className={style.itemSearch} placeholder='search here'/>
            </div>
            </div>
          <div onClick={()=>setShow(!show)} ><NavLink to='/'>HOME</NavLink></div>
          <div onClick={()=>setShow(!show)}><NavLink to='/mobiles'>MOBILES</NavLink></div>
          <div onClick={()=>setShow(!show)}><NavLink to='/laptops'>LAPTOPS</NavLink></div>
          <div onClick={()=>setShow(!show)}><NavLink to='/fashion'>FASHION</NavLink></div>
          <div onClick={()=>setShow(!show)}><NavLink to='/watches'>WATCHES</NavLink></div>
          <div onClick={()=>setShow(!show)}><NavLink to='/accessories'>ACCESSORIES</NavLink></div>
        </div>
        }
    </div>
  )
}

export default LogoMobile