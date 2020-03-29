import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

import Auth from './components/Auth'
// import Dashboard from './components/Dashboard'
// import Schedule from './components/Schedule'

ReactDOM.render(
  <Router>
    <Switch>
      {/* <Route path="/dashboard">
        <Dashboard />
      </Route>
      <Route path="/schedule/:sid">
        <Schedule />
      </Route> */}
      <Route path="/">
        <Auth />
      </Route>
    </Switch>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
