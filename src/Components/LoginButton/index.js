import React from 'react'
import style from './LoginButton.module.css'
import { useNavigate } from 'react-router-dom';

function LoginButton() {
  const Navi = useNavigate()
    const handleLogin = () => {
        Navi("/login");
      };
  return (
    <div>
        <button className={style.Login_btn} onClick={handleLogin} >Login</button>
    </div>
  )
}

export default LoginButton