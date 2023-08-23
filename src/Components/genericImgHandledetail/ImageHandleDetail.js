import React from 'react'
import { useNavigate } from 'react-router-dom'

function ImageHandleDetail({item}) {
    // console.log(item);
    const navi =useNavigate()

    const handleDetail=(item)=>{
        navi(`${item.search_category}/${item.ide}` , {state:item})
    }
    
  return (
    <img  onClick={()=>handleDetail(item)} src={item.image} alt='slow internet'/>
  )
}

export default ImageHandleDetail