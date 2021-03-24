import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Components/App/App';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBarComp from './Components/FrontEnd/NavBar';
import CallUsers from './Components/FrontEnd/Users/Users';
import CallRepos from './Components/FrontEnd/Repos/CallRepos';



ReactDOM.render(
  <React.StrictMode>
    <Router>
      <NavBarComp position="static" />
      <Switch>
    <Route exact path="/" component={App} />
    <Route path="/users" component={CallUsers} />
    <Route path="/repos" component={CallRepos} />
    </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

