import React, { useState } from "react";
import { FaUser, FaShoppingCart, FaSearch} from "react-icons/fa";
import "./navigation.style.css";
import style from '../LogoMobile.js/logoMobile.module.css'
import {NavLink, useNavigate, Link} from 'react-router-dom'

import SignupButton from '../SignupButton/Signup';
import LoginButton from '../LoginButton';
import { useDispatch, useSelector } from 'react-redux';

import { Person } from "@material-ui/icons";
import { userLoggedOut } from "../../Utility/reduxToolKit/CartSlice";

function TopNavigation() {
  const [show,setShow]= useState(false)

  const [search, setSearch]=useState('')

  const dispatch = useDispatch()

  const navi = useNavigate();
  const [showShopDropdownMobile, setShowShopDropdownMobile] = useState(false);
  const [showShopDropdownLaptop, setShowShopDropdownLaptop] = useState(false);
  const [showShopDropdownFashion, setShowShopDropdownFashion] = useState(false);
  const [showShopDropdownWatch, setShowShopDropdownWatch] = useState(false);
  const [showShopDropdownAces, setShowShopDropdownAces] = useState(false);

  const token = localStorage.getItem("token")
  const name = localStorage.getItem("name")

  // console.log(token);


  const [user,setUser]=useState(false)
  // const count =useSelector(state=>state.productAdd.value)
  const cart =useSelector(state=>state.productAdd)
  const cartCount = cart.cartItems.length

  // const navi =useNavigate()
// console.log(cartCount);
  const handleUserbtn=()=>{
setUser(!user)
// console.log("working");
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      searchHandle(e);
    }
  };

  const handleLogout = ()=>{
    // localStorage.removeItem("token");
    localStorage.clear()
    setUser(false);
    dispatch(userLoggedOut())
    navi('/')
  }
  const user_id = localStorage.getItem("user_id") || 0

  const searchHandle=(event)=>{
    event.preventDefault()
    // console.log(search)
    navi('/search',{state:search})
    setSearch("") 
  }
  

  return (
    <>
    <div className="The_logo_cntr">
    <div className='iShopLogo'><Link to={'/'} style={{textDecoration:'none', color: "#FF4252"}}>iQoo Store</Link></div>
    <div className="HeaderRight ">
    <div className='searchCntnr onlyWebView'>
            <input type="text" className='itemSearch' value={search} placeholder='search here' onChange={(event)=>{setSearch(event.target.value)}} onKeyDown={handleKeyPress} />
            {/* <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button> */}
            <button className='searchBtn' onClick={searchHandle}><FaSearch/></button>
          </div>
         
          <div onClick={()=>navi(`/items/${user_id}`)} className='shoppingDisp'>
            {/* <FontAwesomeIcon icon={faBagShopping} /> items */}
            <FaShoppingCart />&nbsp;<span><span>
              {cartCount}
              </span> item</span>
          </div>
          <div >
            {/* <FontAwesomeIcon icon={faUser} /> My Profile */}
            <div  className='userCntnr onlyWebView'>
              {
              token 
              ?
              (
                <div>
               
                <div className='userIconBtn' onClick={handleUserbtn}><div className='customAvatar'>{name[0]}</div>  <span>{name}</span>
                </div>
                {
              user &&
              <div onClick={handleUserbtn} className='userDropdown'>
                   <div onClick={()=>{navi('/dashboard')}}>Dashboard</div>
                   <div onClick={handleLogout}>Logout</div>
              </div>
            }
            </div>
              )
              :
              <div className='userIconBtn' onClick={()=>navi('/login')}><FaUser />&nbsp; <span>Login</span></div>
              }
             
            </div>
            </div>
            {/* <SignupButton/> */}
</div>
          </div>


      

       
        
<div className="onlyWebView">
      <div className="topNavCon">
        <div className="NavMainCon">
          <div className="NavSubCon">
            <div onClick={() => navi("/")} className="topNavHeight">
              HOME
            </div>

            <div
              onClick={() => navi("/mobiles")}
              onMouseOver={() => setShowShopDropdownMobile(true)}
              onMouseLeave={() => setShowShopDropdownMobile(false)}
              // onClick={() => setShowShopDropdown(!showShopDropdown)}
              className="topNavHeight"
            >
              MOBILES
            </div>
            {showShopDropdownMobile && (
              <div
                className="shopDropDownMobile commonDropDown"
                onMouseOver={() => setShowShopDropdownMobile(true)}
                onMouseLeave={() => setShowShopDropdownMobile(false)}
                onClick={() => setShowShopDropdownMobile(false)}
              >
                <div  onClick={() => navi("/mobiles/iphone", {state:"mobiles/iphone"})}>Iphone</div>
                <div onClick={() => navi("/mobiles/oneplus", {state:"mobiles/oneplus"})}>One Plus</div>
                <div onClick={() => navi("/mobiles/samsung", {state:"mobiles/samsung"})}>Samsung</div>
                {/* <div onClick={() => navi("/mobiles/oneplus")}>Xiomi</div> */}
                {/* <div>Speakers</div> */}
              </div>
            )}

            <div onClick={() => navi("/laptops")} 
             onMouseOver={() => setShowShopDropdownLaptop(true)}
             onMouseLeave={() => setShowShopDropdownLaptop(false)}
            className="topNavHeight">
             LAPTOPS
            </div>
            {showShopDropdownLaptop && (
              <div
                className="shopDropDownLaptop commonDropDown"
                onMouseOver={() => setShowShopDropdownLaptop(true)}
                onMouseLeave={() => setShowShopDropdownLaptop(false)}
                onClick={() => setShowShopDropdownLaptop(false)}
              >
                <div  onClick={() => navi("/laptops/macbook", {state:"laptops/macbook"})}>Macbook</div>
                <div  onClick={() => navi("/laptops/dell", {state:"laptops/dell"})}>Dell</div>
                <div  onClick={() => navi("/laptops/lenovo", {state:"laptops/lenovo"})}>Lenovo</div>
                {/* <div>Xiomi</div> */}
                {/* <div>Speakers</div> */}
              </div>)
}
            <div onClick={() => navi("/fashion")} 
             onMouseOver={() => setShowShopDropdownFashion(true)}
             onMouseLeave={() => setShowShopDropdownFashion(false)}
            className="topNavHeight">
              FASHION
            </div>
            {showShopDropdownFashion && (
              <div
                className="shopDropDownFashion commonDropDown"
                onMouseOver={() => setShowShopDropdownFashion(true)}
                onMouseLeave={() => setShowShopDropdownFashion(false)}
                onClick={() => setShowShopDropdownFashion(false)}
              >
                <div onClick={() => navi("/fashion/men", {state:"fashion/men"})}>Men</div>
                <div onClick={() => navi("/fashion/women", {state:"fashion/women"})}>Women</div>
                <div onClick={() => navi("/fashion/kids", {state:"fashion/kids"})}>Kids</div>
                {/* <div>Xiomi</div> */}
                {/* <div>Speakers</div> */}
              </div>)
}
            <div onClick={() => navi("/watches")} 
               onMouseOver={() => setShowShopDropdownWatch(true)}
               onMouseLeave={() => setShowShopDropdownWatch(false)}
            className="topNavHeight">
              WATCHES
            </div>
            {showShopDropdownWatch && (
              <div
                className="shopDropDownWatch commonDropDown"
                onMouseOver={() => setShowShopDropdownWatch(true)}
                onMouseLeave={() => setShowShopDropdownWatch(false)}
                onClick={() => setShowShopDropdownWatch(false)}
              >
                {/* <div>Rolex</div> */}
                {/* <div>Firebolt</div> */}
                <div onClick={() => navi("/watches/casio", {state:"watches/casio"})}>Casio</div>
                <div onClick={() => navi("/watches/smart watch", {state:"watches/smart watch"})}>Smart watches</div>
                {/* <div>Speakers</div> */}
              </div>)
}
            <div onClick={() => navi("/accessories")} 
            onMouseOver={() => setShowShopDropdownAces(true)}
            onMouseLeave={() => setShowShopDropdownAces(false)}
            className="topNavHeight">
              ACCESSORIES
            </div>
            {showShopDropdownAces && (
              <div
                className="shopDropDownAces commonDropDown"
                onMouseOver={() => setShowShopDropdownAces(true)}
                onMouseLeave={() => setShowShopDropdownAces(false)}
                onClick={() => setShowShopDropdownAces(false)}
              >
                <div onClick={() => navi("/accessories/earbuds", {state:"accessories/earbuds"})}>Ear buds</div>
                {/* <div>Dell</div> */}
                <div onClick={() => navi("/accessories/powerbank", {state:"accessories/powerbank"})}>Powerbank</div>
                {/* <div>Speakers</div> */}
                <div onClick={() => navi("/accessories/pendrive", {state:"accessories/pendrive"})}>Pendrives</div>
              </div>)
}
          </div>
        </div>
        <div className="navHrCon">
          <hr className="navHr" />
        </div>
      </div>
      </div>
      {/* <div className="homeDropDown"></div> */}
   <div className="onlyMV">
   {
              token 
              ?
              (
                <div>
                  
                <div className='userIconBtn' onClick={handleUserbtn}><div className='customAvatar'>{name[0]}</div>  </div>
                {
              user &&
              <div onClick={handleUserbtn} className='userDropdown'>
                   <div onClick={()=>{navi('/dashboard')}}>Dashboard</div>
                   <div onClick={handleLogout}>Logout</div>
              </div>
            }
            </div>
              )
              :
              <div className='userIconBtn' onClick={()=>{navi('/login')
              // setShow(!show)
            }
            }><FaUser />&nbsp; <span>Login</span></div>
              }
    {/* <div onClick={()=>navi('/items')} className={style.cartCntnr}><div className={style.shop_cart}> <FaShoppingCart/> </div>&nbsp;<span><span>0</span> item</span></div>  */}
    <div onClick={()=>setShow(!show)} className="hamburgerIcon">
            <div className={style.line}></div>
            <div className={style.line}></div>
            <div className={style.line}></div>
        </div>
      {show &&
        <div className={style.mobileDropdown} >
             {/* {
              token 
              ?
              (
                <div>

                <div className='userIconBtn' onClick={handleUserbtn}><div className='customAvatar'>{name[0]}</div>  <span>{name}</span></div>
                {
              user &&
              <div onClick={handleUserbtn} className='userDropdown'>
                   <div onClick={()=>{navi('/dashboard')}}>Dashboard</div>
                   <div onClick={handleLogout}>Logout</div>
              </div>
            }
            </div>
              )
              :
              <div className='userIconBtn' onClick={()=>{navi('/login')
              setShow(!show)
            }
            }><FaUser />&nbsp; <span>Login</span></div>
              } */}
             
            <div>
            <div className={style.searchCntnr}>
                    <button onClick={searchHandle} className={style.searchBtn}><FaSearch/></button>
                    <input type="text" className={style.itemSearch} placeholder='search here' onChange={(event)=>{setSearch(event.target.value)}} onKeyDown={handleKeyPress}/>
            </div>
            </div>
          <div className="a" onClick={()=>setShow(!show)} ><NavLink to='/'>HOME</NavLink></div>
          <div className="a" onClick={()=>setShow(!show)}><NavLink to='/mobiles'>MOBILES</NavLink></div>
          <div className="a" onClick={()=>setShow(!show)}><NavLink to='/laptops'>LAPTOPS</NavLink></div>
          <div className="a" onClick={()=>setShow(!show)}><NavLink to='/fashion'>FASHION</NavLink></div>
          <div className="a" onClick={()=>setShow(!show)}><NavLink to='/watches'>WATCHES</NavLink></div>
          <div className="a" onClick={()=>setShow(!show)}><NavLink to='/accessories'>ACCESSORIES</NavLink></div>
        </div>
        }
        </div>
   
    </>
  );
}

export default TopNavigation;
