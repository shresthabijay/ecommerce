import React, { Component } from 'react';
import Main from "./Components/Site/main"
import Admin from "./Components/Admin/admin"
import 'semantic-ui-css/semantic.css'
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"

let obj={a:"1",b:"2",c:"3"}

let {a,...rest}=obj;

console.log(a)
console.log(rest)

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
        <Route path="/admin" component={Admin}/>
        <Route path="/" component={Main}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
