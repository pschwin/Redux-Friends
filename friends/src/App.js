import React, { Component } from 'react';

import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Login from './components/Login';
import PrivateRoute from './components/PrivateRoute';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <ul>
          <li>
            <Link to='/home'>Home</Link>
          </li>
          <li>
            <Link to='/home-protected'>Protected-Home</Link>
          </li>
        </ul>
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/home-protected" component={''} />

      </div>
      </Router>
    );
  }
}

export default App;
