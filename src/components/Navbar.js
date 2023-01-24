import { Link } from "react-router-dom";
import { Icon } from "@iconify/react";

const Navbar = () => {
  return (
    <div className='nvbr'>
      <nav className='container d-flex align-items-center justify-content-between'>
        <div>
          <img
            src='../brand_logo.png'
            className='nav-logo'
            alt='crossdev'
          />
        </div>
        <ul className='ul-nav'>
          <li className='li-nav'>
            <Link to='/'>Home</Link>
          </li>
          <li className='li-nav'>
            <Link to='/product'>Product</Link>
          </li>
          <li className='li-nav'>
            <Link to='/about'>About</Link>
          </li>
          <li className='li-nav'>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>
        <Icon
          icon='charm:menu-hamburger'
          className='icon-nav'
        />
      </nav>
    </div>
  );
};

export default Navbar;
