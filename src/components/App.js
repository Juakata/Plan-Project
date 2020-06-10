import React from 'react';
import Navbar from './layout/Navbar.js';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './home';

const App = () => (
  <BrowserRouter>
    <Navbar />
    <Route to="/" component={Home} />
  </BrowserRouter>
);

export default App;
