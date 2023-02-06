import { Icon } from "@iconify/react";
import { useDispatch } from "react-redux";
import { setLoginForm } from "../features/loginSlice";
import { useState } from "react";

const Signin = () => {
  const dispatch = useDispatch();
  const changeFormLogin = (f) => {
    dispatch(setLoginForm({ form: f }));
  };
  const [visiblePassword, setVisibility] = useState(false);
  const toggleVisiblePassword = () => {
    setVisibility(!visiblePassword);
  };

  return (
    <>
      <h3 className='text-center text-green sgnin'>Sign In</h3>
      <div className='box-form'>
        <form id='def-form'>
          <div className='inputbox'>
            <input
              type='text'
              required='required'
            />
            <span>Email</span>
          </div>
          <div className='inputbox'>
            <input
              className='inpt-pswd'
              type={visiblePassword ? "text" : "password"}
              required='required'
            />
            <span>Password</span>
            <Icon
              className='icn-pswd'
              icon={
                visiblePassword ? "mdi:eye-off" : "ic:baseline-remove-red-eye"
              }
              onClick={() => {
                toggleVisiblePassword();
              }}
            />
          </div>
          <div className='text-center'>
            <button className='btn-form'>Sign in</button>
          </div>
        </form>
        <p>
          Do not have account?{" "}
          <span
            className='s-link'
            onClick={() => {
              changeFormLogin("Signup");
            }}>
            Sign Up
          </span>
          .
        </p>
      </div>
    </>
  );
};

export default Signin;
