import React from 'react'
import './header.style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBagShopping, faClipboardList, faEnvelope, faMagnifyingGlass, faUser } from '@fortawesome/free-solid-svg-icons'


function Header() {
  return (
    <div>
    <div className='HeaderCon'>
      <div className='HeaderLeft'>
      <div className='selectOption'>
        <div className='arrow'></div>
        <select className='HeaderFirstSelect'>
          <option>EN</option>
          <option>EN(US)</option>
        </select>
      </div>
      <div className='selectOption'>
        <div className='arrow'></div>
        <select className='HeaderFirstSelect'>
          <option>$</option>
          <option>₹</option>
        </select>
      </div>
      </div>
      {/* <div className='HeaderRight'>

        <div><FontAwesomeIcon icon={faUser} /> My Profile</div>
        <div><FontAwesomeIcon icon={faBagShopping} /> items</div>
        </div>
        <div>
        <div><FontAwesomeIcon icon={faMagnifyingGlass} /> </div>
      </div> */}
     
    </div>
    <hr className='HeaderHr'/>
    
    </div>
  )
}

export default Header