import React, { useState, useEffect } from "react";
import style from "./login.module.css";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import { LoginApi, LoginLH, host, localHost } from "../../Components/Constants";
import { useDispatch } from "react-redux";
import { setUserId } from "../../Utility/reduxToolKit/CartSlice";

// import { LoginApi, localhostLogin } from "../../constants/ApiList";

function Login() {
  const dispatch=useDispatch()
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const [store, setStore] = useState(null);

  

  const handleEmail=(event)=>{
    setEmail(event.target.value)
    setError('')
  }

  const handlePassword=(event)=>{
    setPassword(event.target.value)
    setError('')
  }

  const handleButton = (e) => {
    e.preventDefault();

    const API = `${host}/user/login`
    

    if (email && password) {

      const response = axios
      .post(API,{email,password})
      response
        .then((res) => {
      console.log("inside .then");

          // console.log(res.data);

          if(res.data.token){
            localStorage.setItem("token", res.data.token);
            localStorage.setItem("name",res.data.name)
           dispatch(setUserId(res.data._id))
            navigate("/",{replace:true});
            setStore(res.data);

          }else{
            setError(res.data.message);
            setEmail("")
            setPassword("")
          }         
        })
        .catch((err) =>{

          setError(err.response.data.message);
          setEmail("")
          setPassword("")
          // console.log("inside .catch method");
          console.log(err)
        } );
    } else {
// console.log("inside handle btn && else condition");

      setError("Please enter email and password.");
    }
  };



  const handleBackBtn = () => {
    navigate("/");
  };

  return (
    <div
    //  className={style.LoginParent}
     >
      {/* <div className={style.loginTopHeader}>
      <div className='iShopLogo'>iQoo Store</div>
      <button onClick={handleBackBtn} className="backButtn">
        Back
      </button>
      </div> */}
      <div className={style.LoginPage}>
      <div className={style.loginText}>Login here</div>
      <div className={style.loginContainer}>
        <div className={style.LoginCard}>
          <div className={style.logComCon}>
            <img
              className={style.LockImg}
              src="https://www.freeiconspng.com/thumbs/secure-icon-png/lock-icon-17.png"
              alt="Locked"
            />
            <div className={style.Logcont1}>
              {/* <label htmlFor="email">Email:</label> */}
              <input
               className={style.lLoginInp}
                type="email"
                name="email"
                // onChange={handleChange}
                onChange={handleEmail}
                value={email}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={style.Logcont1}>
              {/* <label htmlFor="password">Password:</label> */}
              <input
                className={style.lLoginInp}
                type="password"
                name="password"
                value={password}
                // onChange={handleChange}
                onChange={handlePassword}
                placeholder="Enter your password"
                required
              />
            </div>
            {error && <span className={style.loginErr}>{error}</span>}
            <button className={style.Lbutn} onClick={handleButton}>
              Login
            </button>
            <div className={style.signupRoute}>
              {/* {" "} */}
              <NavLink to="/signup"> Don't have an acoount? signup</NavLink>
            </div>
          </div>
        </div>
      </div>

      </div>

    </div>
  );
}

export default Login;
