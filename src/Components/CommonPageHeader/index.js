import React from 'react'
import { Logo ,LogoMobile,TopNavigation} from '../../Components'


function CommonPageHeader() {
  return (
<div>

      {/* <div className="Logo_web">
        <div className="sub_Logo_header_align">
        <Logo />
        </div>
      
      </div>

      <div className='logo_mobile'>
          <LogoMobile/>
      </div> */}
     
      <div className='logo_web'>
       <TopNavigation />
       </div>
</div>
    
  )
}

export default CommonPageHeader