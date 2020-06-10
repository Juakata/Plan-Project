import React from 'react';
import Navbar from './layout/Navbar.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import SignIn from './auth/SignIn';
import SignOut from './auth/SignOut';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signout" component={SignOut} />
    </Switch>
  </BrowserRouter>
);

export default App;
