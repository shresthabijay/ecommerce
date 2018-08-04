import React, { Component } from 'react';
import Navbar from "./Navbar"
import Home from "./Home/Home"
import TopHeader from "./TopHeader"
import {Container,Icon,Header} from "semantic-ui-react"
import {BrowserRouter as Router,Route,Redirect,Switch} from "react-router-dom"

const NotFound=()=>{
    return(
        <Container style={{display:"flex",marginTop:"20vh",justifyContent:"center",alignItems: 'center',}}>
           <Icon loading color="teal" name="cogs" size="big"/> <Header style={{margin:"0"}}color="green" size="huge">Not Found!</Header>
        </Container>
    )
}
class Main extends Component {
  render() {
    return (
      <div className="App">
        <TopHeader/>
        <Navbar/>
        <Switch>
            <Route exact path="/" render={()=>{
            return (<Redirect to="/home" />)
            }}/>
            <Route path="/home" component={Home}/>   
            <Route path="*" component={NotFound}/> 
        </Switch>     
      </div>
    );
  }
}

export default Main;
