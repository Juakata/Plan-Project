import React from 'react';
import { NavLink } from 'react-router-dom';

const SignInLinks = () => (
  <>
    <li><NavLink to="/projects/create">Create Project</NavLink></li>
    <li><NavLink to="/signout">Sign Out</NavLink></li>
    <li>
      <NavLink to="/" className="btn btn-floating pink lighten-1">HU</NavLink>
    </li>
  </>
);

export default SignInLinks;
