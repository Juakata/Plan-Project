import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOutLinks = () => (
  <>
    <li><NavLink to="/signin">Sign In</NavLink></li>
    <li><NavLink to="/signup">Sign Up</NavLink></li>
  </>
);

export default SignOutLinks;
