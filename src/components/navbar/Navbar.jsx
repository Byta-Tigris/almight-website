import React, {useState} from 'react';
import './navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo-main.png';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  
  return (
    <div className='almight__navbar'>
      <div className='almight__navbar-links'>
        <div className='almight__navbar-links_logo'>
          <img src={logo} alt="logo" />
        </div>
        <div className='almight__navbar-links_container'>
          <p><a href="#home">Home</a></p>
          <p><a href="#whatAlmight">What is Almight</a></p>
          <p><a href="#possibilty">Products</a></p>
          <p><a href="#features">Documents</a></p>
          <p><a href="#blog">Blogs</a></p>
        </div>
      </div>
      <div className='almight__navbar-sign'>
        <p>Sign in</p>
        <button type='button'>Sign up</button>
      </div>
      <div className='almight__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="almight__navbar-menu_container scale-up-center">
          <div className="almight__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#whatAlmight">What is Almight</a></p>
            <p><a href="#possibilty">Products</a></p>
            <p><a href="#features">Documentation</a></p>
            <p><a href="#blog">Blogs</a></p>
          </div>
          <div className="almight__navbar-menu_container-links-sign">
            <p>Sign in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar