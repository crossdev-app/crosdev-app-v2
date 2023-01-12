import { Icon } from "@iconify/react";
import React from "react";
import { Link } from "react-router-dom";

const Notfound = () => {
  return (
    <div className='container not-found-page'>
      <Icon icon='mdi:space-invaders' className="icon-404" />
      <h3 className="mb-0">Opps!</h3>
      <p>Looks like you're getting lost.</p>
      <Link to='/' className="link-404">back to home</Link>
    </div>
  );
};

export default Notfound;
