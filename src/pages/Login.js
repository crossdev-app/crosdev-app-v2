import { Icon } from "@iconify/react";
import React from "react";
import { useSelector } from "react-redux";
import Footer from "../components/Footer";
import Signin from "../components/Signin";
import Signup from "../components/Signup";

const Login = () => {
  const stateLogin = useSelector((state) => state.login);

  return (
    <>
      <div className='login-page'>
        <div className='l-logo'>
          <img
            src='../brand_logo.png'
            className='l-img'
            alt='crossdev'
          />
          <div className='v-line'></div>
        </div>
        <div className='l-form'>
          {stateLogin.loginForm === "Signin" ? <Signin /> : <Signup />}
          <span className='text-center btm-text'>----- login with -----</span>
          <div className='icon-login-container'>
            <Icon
              icon={"bi:google"}
              className='l-icon'
            />
            <Icon
              icon={"bi:facebook"}
              className='l-icon'
            />
            <Icon
              icon={"bi:github"}
              className='l-icon'
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
