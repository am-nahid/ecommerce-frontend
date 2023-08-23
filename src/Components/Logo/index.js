import React, { useState } from 'react'
import { FaUser, FaShoppingCart, FaSearch} from "react-icons/fa";
import './logo.style.css'
import {useNavigate} from 'react-router-dom'
import SignupButton from '../SignupButton/Signup';
import LoginButton from '../LoginButton';
import { useSelector } from 'react-redux';

function Logo() {
  const [user,setUser]=useState(false)
  const count =useSelector(state=>state.productAdd.value)
  const navi =useNavigate()
// console.log(user);
  const handleUserbtn=()=>{
setUser(!user)
// console.log("working");
  }

  // console.log(count);
  return (
    <>
    <div className='iShopLogo'>iQoo Store</div>
    <div className="HeaderRight">
    <div className='searchCntnr'>
            <input type="text" className='itemSearch' placeholder='search here'/>
            {/* <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button> */}
            <button className='searchBtn'><FaSearch/></button>
          </div>
         
          <div onClick={()=>navi('/items')} className='shoppingDisp'>
            {/* <FontAwesomeIcon icon={faBagShopping} /> items */}
            <FaShoppingCart />&nbsp;<span><span>{count}</span> item</span>
          </div>
          <div>
            {/* <FontAwesomeIcon icon={faUser} /> My Profile */}
            <div  className='userCntnr'>
              <div className='userIconBtn' onClick={handleUserbtn}><FaUser /> <span>Login</span></div>
              {
              user &&
              <div onClick={handleUserbtn} className='userDropdown'>
                   <SignupButton />
                   <LoginButton />
              </div>
            }
            </div>
            {/* <SignupButton/> */}
</div>
          </div>
        
    </>
  )
}

export default Logo