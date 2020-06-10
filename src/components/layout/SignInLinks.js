import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLinks = () => (
  <>
    <NavLink to="/projects/create">Create Project</NavLink>
    <NavLink to="/signout">Sign Out</NavLink>
    <NavLink to="/">HU</NavLink>
  </>
);

export default SignInLinks;
