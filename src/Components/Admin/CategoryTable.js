import React, { Component } from 'react'
import {Segment,Container, Table, Loader ,Icon} from "semantic-ui-react"
import axios from "axios"

let Rows=(props)=>{
  let rows=[]
  let no=1;
  props.data.map(d=>{
    let row=(
      <Table.Row>
              <Table.Cell>{no++}</Table.Cell>
              <Table.Cell>{d.name}</Table.Cell>
              <Table.Cell>
              {d.detail}
              <Icon name="pencil alternate"/>
              </Table.Cell>
      </Table.Row>
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
        <Table celled attached selectable>
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
