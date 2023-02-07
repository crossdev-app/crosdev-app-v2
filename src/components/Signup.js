import { useDispatch } from "react-redux";
import { setLoginForm } from "../features/loginSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const changeFormLogin = (f) => {
    dispatch(setLoginForm({ form: f }));
  };

  return (
    <>
      <h3 className='text-center text-green sgnup'>Sign Up</h3>
      <div className='box-form'>
        <form id='def-form'>
          <div className='inputbox'>
            <input
              type='text'
              required='required'
              autoFocus={true}
            />
            <span>Name</span>
          </div>
          <div className='inputbox'>
            <input
              type='text'
              required='required'
            />
            <span>Email</span>
          </div>
          <div className='inputbox'>
            <input
              type='password'
              required='required'
            />
            <span>Password</span>
            <span className='strngth-label'>Strength</span>
          </div>
          <div className='inputbox mt-4'>
            <input
              type='password'
              required='required'
            />
            <span>Repeat Password</span>
          </div>
          <div className='text-center'>
            <button className='btn-form'>Sign Up</button>
          </div>
        </form>
        <p>
          Already have account?{" "}
          <span
            className='s-link'
            onClick={() => {
              changeFormLogin("Signin");
            }}>
            Sign in
          </span>
          .
        </p>
      </div>
    </>
  );
};

export default Signup;
