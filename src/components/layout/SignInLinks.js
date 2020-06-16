import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../actions';

const SignInLinks = ({ signOut, profile }) => (
  <>
    <li><NavLink to="/projects/create">Create Project</NavLink></li>
    <li><a onClick={signOut}>Sign Out</a></li>
    <li>
      <NavLink to="/" className="btn btn-floating pink lighten-1">
        {profile.initials}
      </NavLink>
    </li>
  </>
);

export default connect(null, { signOut })(SignInLinks);
