import React from 'react';
import Navbar from './layout/Navbar.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import SignIn from './auth/SignIn';
import SignOut from './auth/SignOut';
import SignUp from './auth/SignUp';
import CreateProject from './projects/CreateProject';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/signin" component={SignIn} />
      <Route exact path="/signout" component={SignOut} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/projects/create" component={CreateProject} />
    </Switch>
  </BrowserRouter>
);

export default App;
