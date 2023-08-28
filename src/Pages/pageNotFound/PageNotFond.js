import React from 'react'
import './pageNotFound.style.css'
import { NavLink } from 'react-router-dom'

function PageNotFond() {
  return (
    <div className='ecom_cntnr'>
        <h1 className='pageNotFound pgCenter'>Page Not Found </h1>
        <h3 className='pageNotFound-Link pgCenter' ><NavLink to={'/'}>Go to iQoo store's Home Page </NavLink></h3>
        </div>
  )
}

export default PageNotFond