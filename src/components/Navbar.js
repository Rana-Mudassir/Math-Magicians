import React from 'react';
import { NavLink } from 'react-router-dom';
import '../Assests/navbar.css';

function Navbar() {
  return (
    <header>
      <nav>
        <h1>Math Magicians</h1>
        <ul className="nav">
          <li className="nav-link">
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/calculator" className={({ isActive }) => (isActive ? 'active' : '')}>Calculator</NavLink>
          </li>
          <li>
            <NavLink to="/quote" className={({ isActive }) => (isActive ? 'active' : '')}>Quote</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
