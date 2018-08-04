import React, { Component } from 'react'
import  { Container,Grid,Menu, Button, Icon, Sidebar, Segment, Image, Header } from 'semantic-ui-react'
import CatgeoryTable from "./CategoryTable"

export default class Admin extends Component {
  constructor(props) {
    super(props);
    this.state={toogleSidebar:false}
    
  }
  
  handleButtonClick=()=>{
    this.setState({toogleSidebar:true})
  }

  handleSidebarHide=()=>{
    this.setState({toogleSidebar:false})
  }

  render() {
    return (
      <Container fluid style={{padding:"0"}}>
        <div>
            <Menu attached inverted style={{position:"fixed",width:"250px",height:"100vh"}} vertical>
              <Menu.Item>
                <Header textAlign="center" style={{color:"white"}}>Admin</Header>
              </Menu.Item>             
              <Menu.Item onClick name='Tables' />
              <Menu.Item
                onClick
                name='Settings'
              />
              <Menu.Item
              onClick
                name='Site Manager'
              />
            </Menu>
            <div style={{marginLeft:"250px",padding:"15px"}}>
              <CatgeoryTable/>              
            </div>
        </div>
      </Container>
      
    )
  }
}
