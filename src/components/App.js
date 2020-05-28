import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Home";
import CheckIsUserAuth from "./CheckIsUserAuth";
import useStyles from "./styles/useStyles";

const App = () => {
  const { flexColumn } = useStyles();
  return (
    <Router>
      <div className={flexColumn}>
        <Link to="/">Home</Link>
        <Link to="/user-notes">User Notes</Link>
        <Switch>
          <Route path="/user-notes">
            <CheckIsUserAuth />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;