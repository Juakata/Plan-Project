import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';

const Navbar = ({ auth }) => (
  <nav className="nav-top nav-wrapper grey darken-3">
    <div className="container">
      <NavLink to="/" className="brand-logo">Plan Project</NavLink>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        {auth.isLoaded ? auth.uid ? <SignInLinks /> : <SignOutLinks /> : null}
      </ul>
    </div>
  </nav>
);

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(Navbar);
