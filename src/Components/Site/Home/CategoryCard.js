import React, { Component } from 'react'
import{Card,Segment, Grid, Label, Header, Image } from "semantic-ui-react"


export default class CategoryCard extends Component {
  constructor(props) {
    super(props);
    this.imageStyle={height:"100%",width:"100%"}
    this.imageContainerStyle={height:"300px"}
    this.cardStyle={padding:"0"}
    this.labelStyle={backgroundColor:"#25b4be",justifyContent:"center",alignItems:"center",padding:"8px"}
    this.state={isRaised:false}
  }

  onHover=()=>{
      this.setState({isRaised:true})
  }

  onHoverOut=()=>{
      this.setState({isRaised:false})
  }
  
  render() {
    return (
      <Card  style={this.cardStyle} raised={this.state.isRaised} onMouseEnter={this.onHover} onMouseLeave={this.onHoverOut}>
            <div style={this.imageContainerStyle}>
              <a href={this.props.image}>
              <Image style={this.imageStyle} src={this.props.image}/>
              </a>
            </div>
            <Card.Content style={this.labelStyle}>
              <Card.Header textAlign="center" style={{color:"white",fontWeight:"normal",fontSize:"15px"}} >
                  {this.props.category}
              </Card.Header>
            </Card.Content>
      </Card>
    )
  }
}
