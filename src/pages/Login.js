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
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Login;
