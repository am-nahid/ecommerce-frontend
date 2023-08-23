import React, { useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBagShopping,
  faClipboardList,
  faEnvelope,
  faMagnifyingGlass,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FaUser, FaShoppingCart} from "react-icons/fa";
import SignupButton from '../SignupButton/Signup';
import { useNavigate } from 'react-router-dom';

function EcommerceComs() {
  const [user,setUser]=useState(false)
    const navi =useNavigate()

    const handleUserbtn=()=>{
setUser(!user)
// console.log("working");
    }
  return (
    <>
<div>
            <input type="text"/><button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
          </div>
         
          <div onClick={()=>navi('/items')}>
            {/* <FontAwesomeIcon icon={faBagShopping} /> items */}
            <FaShoppingCart />
          </div>
          <div>
            {/* <FontAwesomeIcon icon={faUser} /> My Profile */}
            <FaUser onClick={handleUserbtn}/>

          </div>
          {/* <div><SignupButton/></div> */}
    </>
  )
}

export default EcommerceComs