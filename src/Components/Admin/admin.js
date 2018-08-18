import React, { Component } from 'react'
import  { Container,Grid,Menu, Button, Icon, Sidebar, Segment, Image, Header } from 'semantic-ui-react'
import CatgeoryTable from "./CategoryTable"
import {BrowserRouter as Router,Route,Redirect,Switch,Link} from "react-router-dom"
import TableSection from './TableSection';
import Main from "../Site/main"

const MenuItem=(props)=>{
  return (
    <Link to={props.to}>
      <Menu.Item
        onClick={props.onClick}
        active={props.isActive}
        name={props.name} 
      />
    </Link>
  )
}

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state={toogleSidebar:false,isTableActive:false,isSettingActive:false,isSiteManagerActive:false}
    this.routes={table:"table",setting:"setting",siteManager:"sitemanager"}
  }
  
  handleButtonClick=()=>{
    this.setState({toogleSidebar:true})
  }

  handleSidebarHide=()=>{
    this.setState({toogleSidebar:false})
  }

  handleMenuHighlight=()=>{

    let route=this.props.match.params.route
    if(route===this.routes.table){
      this.setState({isTableActive:true})
    }
    else if(route===this.routes.setting){
      this.setState({isSettingActive:true})
    }
    else if(route===this.routes.siteManager){
      this.setState({isSiteManagerActive:true})
    }
  }

  componentDidMount=()=>{
    console.log("adminnnnnnnnnnnnnnnnnn")
    this.handleMenuHighlight()
  }

  higlightMenu=(route)=>{
    this.setState({isSettingActive:false,isSiteManagerActive:false,isTableActive:false})
    if(route===this.routes.table){
      this.setState({isTableActive:true})
    }
    else if(route===this.routes.setting){
      this.setState({isSettingActive:true})
    }
    else if(route===this.routes.siteManager){
      this.setState({isSiteManagerActive:true})
    }
  }

  render() {

    console.log("rerender")
    return (

      <Container fluid style={{padding:"0"}}>
        <div>
            <Menu attached inverted color="blue" style={{position:"fixed",width:"250px",height:"100vh"}} vertical>
              <Menu.Item>
                <Header textAlign="center" style={{color:"white"}}>Admin</Header>
              </Menu.Item>             
              <MenuItem to="/admin/table" onClick={()=>{this.higlightMenu(this.routes.table)}} route={this.routes.table} name="Table" isActive={this.state.isTableActive}/>
              <MenuItem to="/admin/setting" onClick={()=>{this.higlightMenu(this.routes.setting)}} route={this.routes.setting} name="Setting" isActive={this.state.isSettingActive}/>
              <MenuItem to="/admin/sitemanager" onClick={()=>{this.higlightMenu(this.routes.siteManager)}}  route={this.routes.siteManager} name="Site Manager" isActive={this.state.isSiteManagerActive}/>
            </Menu>

            <div style={{marginLeft:"250px",padding:"15px"}}>
              <Switch>
                <Route exact path="/admin" render={()=>{
                  return <Redirect to="/admin/table"/>
                }}/>
                <Route path="/admin/table" component={TableSection}/>
                <Route path="/admin/sitemanager" render={()=>{
                  return <button>sitemanager</button>
                }}/>
                <Route path="/admin/setting" render={()=>{
                  return <button>setting</button>
                }}/>
                <Route render={()=>{
                  return <button>not found</button>
                }}/>

            
              </Switch>
            </div>
        </div>
      </Container>
      
    )
  }
}
