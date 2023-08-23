import React from 'react'
import { useNavigate } from 'react-router-dom'

function TitleHandle({item}) {
    const navi =useNavigate()

    const handleDetail=(item)=>{
        navi(`${item.search_category}/${item.ide}` , {state:item})
    }
    
  return (
    <div  onClick={()=>handleDetail(item)} className='product_title'>{item.p_name}</div>
  )
}

export default TitleHandle