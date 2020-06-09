import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import React from 'react';
import Sub from './Sub';
import HomePage from './HomePage';
import Nav from './Nav';

const Routes = () => (
  <Router>
    <Nav isLoggedIn />
    <ul>
      <li><Link to="/r/league/">league</Link></li>
      <li><Link to="/">home</Link></li>
    </ul>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/r/:sub" component={Sub} />
    </Switch>
  </Router>
);

export default Routes;
