import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className="nvbr">
      <nav className='container d-flex align-items-center justify-content-between'>
        <div>
          <img
            src='./brand_logo.png'
            className='nav-logo'
            alt='crossdev'
          />
        </div>
        <ul className='ul-nav d-none d-md-flex'>
          <li className='li-nav'>
            <Link to='/'>Home</Link>
          </li>
          <li className='li-nav'>
            <Link to='/about'>About</Link>
          </li>
          <li className='li-nav'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <div className='d-block d-md-none'>
          <Icon
            icon='charm:menu-hamburger'
            className='icon-nav'
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
