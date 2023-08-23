import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home'
import { Accessories, DashBoard, Fashion,  Laptops, Mobiles,  ProductDetails,  SearchPage,  SignupPage, StoreEcom, SubNavRoute, Watches } from '../Pages'
import Login from '../Pages/Login/LoginPage'
import ItemsInCart from '../Pages/cart/Items'
import { Logo,EcommerceComs,TopNavigation, LogoMobile } from '../Components'
import './router.css'
import Footer from '../Components/Footer'

function RouterComp() {
  return (
    <div>
<BrowserRouter>

{/* <div className="Logo_web">
        <div className="sub_Logo_header_align">
        <Logo />
        </div>
      
      </div>

      <div className='logo_mobile'>
          <LogoMobile/>
      </div>
      */}
      <TopNavigation/>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/accessories' element={<Accessories/>}/>
  <Route path='/fashion' element={<Fashion/>}/>
  <Route path='/laptops' element={<Laptops/>}/>
  <Route path='/watches' element={<Watches/>}/>
  <Route path='/store' element={<StoreEcom/>}/>
  <Route path='/mobiles' element={<Mobiles/>}/>
  <Route path='/signup' element={<SignupPage/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/items/:user_id' element={<ItemsInCart/>}/>
  <Route path='/dashboard' element={<DashBoard/>}/>

  <Route path='/search' element={<SearchPage/>}/>


  <Route path='/:cat/:subCat' element={<SubNavRoute/>}/>
  <Route path='/:cat/:subCat/:id' element={<ProductDetails/>}/>
  {/* <Route path='/f' element={<Items/>}/> */}
</Routes>
<Footer/>
</BrowserRouter>
    </div>
  )
}

export default RouterComp




// <div className="Logo_web">
//         <div className="sub_Logo_header_align">
//         <Logo />
//         {/* <div className="HeaderRight"> */}
        
//           {/* <EcommerceComs/> */}
//         {/* </div> */}
        
//         </div>
      
//       </div>

//       <div className='logo_mobile'>
//           {/* <Logo /> */}
//           <LogoMobile/>
//       </div>