import React from 'react'
import style from './signup.module.css'
import { useNavigate } from 'react-router-dom';

function SignupButton() {
  const Navi = useNavigate()
    const handleSignup = () => {
        Navi("/signup");
      };
  return (
    <div>
        <button className={style.signup_btn} onClick={handleSignup} >Signup</button>
    </div>
  )
}

export default SignupButton