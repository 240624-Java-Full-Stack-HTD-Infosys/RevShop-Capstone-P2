import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/home">RevShop</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/home">Home</Link>
        </li>
        <li>
          <Link to="/products">Products</Link>
        </li>
        <li>
          <Link to="/cart">Cart</Link>
        </li>
        <li>
          <Link to="/profilePage">Profile</Link>
          {/*Here put get transactions */}

        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
    </nav>
    </>
  );
};

export default NavBar;
