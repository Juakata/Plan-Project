import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import { Redirect } from 'react-router-dom';
import Dashboard from './Dashboard';
import Notifications from './Notifications';

const Home = ({ auth, notifications }) => {
  if (auth.isLoaded && !auth.uid) return <Redirect to="/signin" />;
  return (
    <div className="dashboard">
      <div className="row">
        <div className="col s12 m6">
          <Dashboard />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications notifications={notifications}/>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.firebase.auth,
  notifications: state.firestore.ordered.notifications,
});

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'notifications', limit: 4, orderBy: ['time', 'desc'] },
  ]),
)(Home);
