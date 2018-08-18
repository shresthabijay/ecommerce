import React, { Component } from 'react'
import {Segment,Container, Table, Loader ,Icon} from "semantic-ui-react"
import {Route,Redirect,Switch,Link} from "react-router-dom"
import axios from "axios"

class DataRow extends Component {
  constructor(props) {
    super(props);
    this.colors={teal:"blue",orange:"orange"}
    this.state={showoptions:false,editColor:this.colors.teal}
  }
  
  hoverInHandler=()=>{
    this.setState({showoptions:true})
  }

  hoverOutHandler=()=>{
    this.setState({showoptions:false})
  }

  onMouseOverEdit=()=>{
    this.setState({editColor:this.colors.orange})
  }

  onMouseLeaveEdit=()=>{
    this.setState({editColor:this.colors.teal})
  }

  render() {
    let data=this.props.data
    let editColor=this.state.editColor

    return (
      <Table.Row onMouseEnter={this.hoverInHandler} onMouseLeave={this.hoverOutHandler}>
        <Table.Cell>{data.no}</Table.Cell>
        <Table.Cell>{data.name}</Table.Cell>
        <Table.Cell>
        {data.detail}
        { this.state.showoptions &&
          <Link to={"table/categoryedit/"+data.id}>
            <Icon 
              onMouseEnter={this.onMouseOverEdit} 
              onMouseLeave={this.onMouseLeaveEdit} 
              style={{position:"absolute",right:"30px"}} 
              color={editColor}
              name="pencil alternate"
            />
          </Link>
        }
        </Table.Cell>
      </Table.Row>
    )
  }
}

let Rows=(props)=>{
  let rows=[]
  let no=1;
  props.data.map(d=>{
    d["no"]=no++;
    let row=(
      <DataRow data={d}/>
    )

    rows.push(row)
  })
  return rows
}

export default class CategoryTable extends Component {
  constructor(props) {
    super(props)

    this.data=[]
    this.state={showData:false,loadingState:true}

  }

  componentDidMount(){
    axios.get("http://localhost:5000/category/all")
    .then(r=>{
      this.data=r.data
      this.setState({showData:true,loadingState:false})
    })
  }
  
  render() {
    return (
        <div>
        <Table celled attached selectable style={{position:"relative"}}>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={2}>S.N</Table.HeaderCell>
            <Table.HeaderCell width={5}>Name</Table.HeaderCell>
            <Table.HeaderCell width={9}>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
    
        <Table.Body>
          {this.state.showData &&
            <Rows data={this.data}/>
          }
        </Table.Body>
        </Table>
        {this.state.loadingState &&
          <Segment attached padded>
            <Loader active></Loader>
          </Segment>
        }
        </div>
        
    )
  }
}
