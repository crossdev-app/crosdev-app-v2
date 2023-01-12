import { Icon } from "@iconify/react";
import React from "react";

const Footer = () => {
  const dt = new Date();
  const yr = dt.getFullYear();
  return (
    <div className='footer d-flex flex-column align-items-center justify-content-end'>
      <div className='footer-icon-box'>
        <Icon className="mx-1" icon='mdi:instagram' />
        <Icon className="mx-1" icon='mdi:twitter' />
        <Icon className="mx-1" icon='mdi:linkedin' />
        <Icon className="mx-1" icon='mdi:github' />
      </div>
      <span>&copy; {yr} - crossdev</span>
    </div>
  );
};

export default Footer;
