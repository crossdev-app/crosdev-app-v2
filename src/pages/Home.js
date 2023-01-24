import React from "react";
import Cardpointcontainer from "../components/Cardpointcontainer";
import Homecarousel from "../components/Homecarousel";

const Home = () => {
  return (
    <div className='container box-content'>
      <div id='welcome'>
        <div className='welcome-img-container'>
          <img
            src='./welcome_img.png'
            className='welcome-img'
            alt='Welcome'
          />
        </div>
        <div className='welcome-text-container'>
          <h1>
            Welcome, <br /> Cross Friends!
          </h1>
          <p>Introducing your partner in Digital Solution.</p>
        </div>
      </div>
      <p className='text-green text-center'>Why you should choose us?</p>
      <Cardpointcontainer />
      <p className='text-green text-center'>Take a look to our product</p>
      <Homecarousel />
    </div>
  );
};

export default Home;
