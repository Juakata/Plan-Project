import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLinks = () => (
  <>
    <li><NavLink to="/projects/create">Create Project</NavLink></li>
    <li><NavLink to="/signout">Sign Out</NavLink></li>
    <li><NavLink to="/">HU</NavLink></li>
  </>
);

export default SignInLinks;
