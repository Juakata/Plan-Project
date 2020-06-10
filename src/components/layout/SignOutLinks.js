import React from 'react';
import { NavLink } from 'react-router-dom';

const SignOutLinks = () => (
  <>
    <NavLink to="/signin">Sign In</NavLink>
    <NavLink to="/signup">Sign Up</NavLink>
  </>
);

export default SignOutLinks;
