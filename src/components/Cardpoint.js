import { Icon } from "@iconify/react";
import React from "react";

const Cardpoint = ({ icon, title, text }) => {
  return (
    <div className='card-point'>
      <div className='card-point-header'>
        <Icon
          icon={icon}
          className='icon-point'
        />
      </div>
      <div className='card-point-body'>
        <h3 className="text-center">{title}</h3>
        <p className="text-center p-3">{text}</p>
      </div>
    </div>
  );
};

export default Cardpoint;
