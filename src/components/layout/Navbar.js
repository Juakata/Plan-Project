import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = ({ auth, profile }) => (
  <nav className="nav-top nav-wrapper grey darken-3">
    <div className="container">
      <NavLink to="/" className="brand-logo">Plan Project</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {auth.isLoaded ? auth.uid ? <SignInLinks profile={profile} /> : <SignOutLinks /> : null}
      </ul>
    </div>
  </nav>
);

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile,
});

export default connect(mapStateToProps)(Navbar);
