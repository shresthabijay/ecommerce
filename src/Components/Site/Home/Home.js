import React, { Component } from 'react'
import {Container,Grid,Segment,Label,Header} from "semantic-ui-react"
import SpecialDealSection from "./SpecialDealSection"
import TopCategories from "./TopCategories"
import NewArrivalSection from "./NewArrivalSection"
import {Route,Link,Redirect} from "react-router-dom"


export default class Home extends Component {
  constructor(props) {
    super(props)
    this.sectionStyle={margin:"0",padding:"0",paddingLeft:"12%",paddingRight:"12%"} 
    this.SectionDividerStyle={width:"100%",height:"6em",display:"flex",alignItems:"center",justifyContent:"center",marginTop:"15px",marginBottom:"15px"}
  }
  
  render() {
    console.log(this.props.match.url+"hello")
    return (
      <Container fluid style={{backgroundColor:"#f5f5f5",padding:"0",}}>

        <Grid padded >
            <Segment attached style={this.SectionDividerStyle}>
                <Header color="teal"> TOP CATEGORIES </Header>
            </Segment>

            <Grid.Row centered style={this.sectionStyle}>
              <Grid.Column computer={16}>
                  <TopCategories/>
              </Grid.Column>
            </Grid.Row>

            <Segment attached style={this.SectionDividerStyle}>
                <Header color="teal"> HOT SALE THIS WEEK </Header>
            </Segment>
            
            <Grid.Row centered  style={this.sectionStyle}>
              <Grid.Column computer={16}>
                <SpecialDealSection/>
              </Grid.Column>
            </Grid.Row>

            <Segment attached style={this.SectionDividerStyle}>
                <Header color="teal"> NEW ARRIVALS  </Header>
            </Segment>

             <Grid.Row centered  style={this.sectionStyle}>
              <Grid.Column computer={16}>
                <NewArrivalSection/>
              </Grid.Column>
            </Grid.Row>
            
        </Grid>
  
      </Container>
    )
  }
}
