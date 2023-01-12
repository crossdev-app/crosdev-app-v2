import React from "react";
import Cardpoint from "./Cardpoint";

const Cardpointcontainer = () => {
  return (
    <div className='card-point-container'>
      <Cardpoint
        icon={"fa:gears"}
        title='Reliable'
        text={
          "We provide fast, reliable, and secured for your digital platform."
        }
      />
      <Cardpoint
        icon={"material-symbols:temp-preferences-custom"}
        title='Customizable'
        text={
          "Our product is customizable. You can request any feature as you need."
        }
      />
      <Cardpoint
        icon={"mdi:support"}
        title='Support'
        text={
          "Don't worry if you had some problem with our app, our customer support will guide you to solve it."
        }
      />
    </div>
  );
};

export default Cardpointcontainer;
