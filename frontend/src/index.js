import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import CssBaseline from '@material-ui/core/CssBaseline';
import './index.css';

// Importing Pages
import SignIn from './Screens/SingIn'
import SignUp from './Screens/SignUp'
import Home from './Screens/Home'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <div className="app">
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route path="/">
            <SignIn />
          </Route>
        </Switch>
      </div>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
