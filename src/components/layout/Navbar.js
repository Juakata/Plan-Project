import React from 'react';
import { NavLink } from 'react-router-dom'
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = () => (
  <nav className="nav-top">
    <div className="menu-left">
      <NavLink to="/">Plan Project</NavLink>
    </div>
    <div className="menu-right">
      <SignInLinks />
      <SignOutLinks />
    </div>
  </nav>
);

export default Navbar;
