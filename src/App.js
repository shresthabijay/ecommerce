import React, { Component } from 'react';
import Main from "./Components/Site/main"
import Admin from "./Components/Admin/admin"
import 'semantic-ui-css/semantic.css'
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"


class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/admin/:route" component={Admin}/>
        <Route path="/" component={Main}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
