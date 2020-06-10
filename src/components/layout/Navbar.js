import React from 'react';
import { NavLink } from 'react-router-dom'
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = () => (
  <nav className="nav-top">
    <div className="nav-wrapper">
      <NavLink to="/" className="brand-logo">Plan Project</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <SignInLinks />
        <SignOutLinks />
      </ul>
    </div>
  </nav>
);

export default Navbar;
