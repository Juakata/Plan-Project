import React from 'react';
import Dashboard from './Dashboard';
import Notifications from './Notifications';

const Home = () => (
  <div className="dashboard container">
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

export default Home;
