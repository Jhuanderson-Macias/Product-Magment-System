import React from 'react'

import { BrowserRouter as Router, Route,  Link } from 'react-router-dom';

import Navigation from '../Navigation/Navigation.js';


import LandingPage from '../Users/Users.js'; 
import SignUpPage from '../AddTask/AddTask.js';
import SignInPage from '../ListTask/ListTask.js';

import * as ROUTES from '../Constants/routes';

const Container = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.LANDING} component={LandingPage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
    </div>
  </Router>
);

export default Container;