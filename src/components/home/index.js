import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Notifications from './Notifications';

const Home = ({ auth }) => {
  if (auth.isLoaded && !auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="dashboard">
      <div className="row">
        <div className="col s12 m6">
          <Dashboard />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
});

export default connect(mapStateToProps)(Home);
