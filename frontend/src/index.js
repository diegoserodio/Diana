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
import CreateMission from './Screens/CreateMission'
import AddASample from './Screens/AddASample'
import MissionAstronaut from './Screens/MissionAstronaut'
import PeersList from './Screens/PeersList'
import CallForHelp from './Screens/CallForHelp'

ReactDOM.render(
  <React.StrictMode>
    <CssBaseline />
    <Router>
      <div className="app">
        <Switch>
          <Route path="/call-for-help">
            <CallForHelp />
          </Route>
          <Route path="/peers-list">
            <PeersList />
          </Route>
          <Route path="/mission-astronaut">
            <MissionAstronaut />
          </Route>
          <Route path="/add-a-sample">
            <AddASample />
          </Route>
          <Route path="/create-mission">
            <CreateMission />
          </Route>
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
