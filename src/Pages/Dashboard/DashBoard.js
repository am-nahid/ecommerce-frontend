import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./Dashboard.style.css";
import { useNavigate } from "react-router-dom";
import { host } from "../../Components/Constants";

function DashBoard() {
  const [data, setData] = useState([]);
  const navi = useNavigate();
  const user_id = useSelector((state) => state.productAdd.user_id);
  const LocalAPI = `http://localhost:4040/product/order-user-detail/${user_id}`;
  const API = `${host}/product/order-user-detail/${user_id}`;

  const name = localStorage.getItem("name");
  // console.log(name);

  useEffect(() => {
    axios
      .get(API)
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "error from dashboard"));
  }, []);

  // console.log(data);
  return (
    <div>
      <div className="ecom_cntnr">
        <div className="dashboard-cntnr">
          <div className="dashboard-Subcntnr">
            {data?.map((orderDetail) => {
              return (
                <div key={orderDetail._id} className="dashboard-left-box">
                  <div className="dashboard-time">
                    <div className="order-details">Your Orders:</div>
                    <div>
                      <div>
                        <span className="date-dash">Date: </span>
                        {orderDetail.orderDate}
                      </div>
                      <div>
                        <span className="date-dash">Time: </span>
                        {orderDetail.orderTime}
                      </div>
                    </div>
                  </div>

                  <div className="dashboard-order-detail">
                    {orderDetail.cartItems.map((item) => {
                      return (
                        <div key={item.ide} className="dashboard-content">
                          <img src={item.image} alt={item.title} />

                          <div className="dashboard-product-description">
                            <div className="dashboard-title">{item.title}</div>
                            <div className="dashboard-price">
                              <div>
                                <span>Quantity:</span>
                                {item.cartQuantity}
                              </div>
                              <div>
                                <span>Price:</span>₹ {item.price}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className="dashboard-right-box">
              <div className="dashboard-welcome">
                <div>Hii, {name} welcome to iQoo Store</div>
                <button
                  onClick={() => navi("/")}
                  className="dashboard-btn-explr"
                >
                  Keep Shopping
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
