

import React, { useEffect, useState } from 'react';
import { CommonPageHeader, GenericAddToCartButton, ImageHandleDetail, TitleHandle } from '../../Components';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { itemCount } from '../../Utility/reduxToolKit/CartSlice';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { host } from '../../Components/Constants';

function SubNavRoute() {
  const [data, setData] = useState([]);
  const location = useLocation();
 
  const dispatch = useDispatch();

  // console.log(location.state);
  const route = location.state
  // console.log(route);

  

  useEffect(() => {
    if(typeof(route)==="string"){

        // console.log(typeof(route)==="string");
    const localAPI = `http://localhost:4040/user/product/${route}`;
    const API = `${host}/api/product/${route}`;
    axios.get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
    }
    //   console.log("update");
    //   console.log(location.state);
  }, [location.state]);

  const navi = useNavigate();
 
  const handleDetail = (item) => {
    // console.log(item.search_category,item.ide);
    navi(`/${item.category}/${item.search_category}/${item.ide}`, { state: item });
  };


  return (
    <div>
      {/* <CommonPageHeader /> */}
      <div className='ecom_cntnr'>
        <div className='FeaturedCntnr'>
          <div className='FeaturedSubCntnr'>
            {data.map((item, index) => (
              <div className='Featcard' key={index}>
                                  <img onClick={()=>handleDetail(item)}  src={item.image} alt="Product" />
                  <div onClick={()=>handleDetail(item)} className="product_title">{item.p_name}</div>
                <p>Price: ₹{item.price}</p>
                {/* <button 
                // onClick={() => dispatch(itemCount())}
                >add to cart</button> */}
                 <GenericAddToCartButton item={item}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubNavRoute;
