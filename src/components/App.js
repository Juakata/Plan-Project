import React from 'react';
import Navbar from './layout/Navbar.js';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import SignIn from './auth/SignIn';
import SignUp from './auth/SignUp';
import CreateProject from './projects/CreateProject';
import ProjectDetail from './projects/ProjectDetail';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/signin" component={SignIn} />
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/projects/create" component={CreateProject} />
        <Route exact path="/projects/:id" component={ProjectDetail} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;
