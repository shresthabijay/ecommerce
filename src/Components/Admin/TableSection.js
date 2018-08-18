import React, { Component } from 'react'
import {Segment,Container, Table, Loader ,Icon} from "semantic-ui-react"
import CategoryTable from "./CategoryTable"
import CategoryEdit from "./CategoryEdit"
import {Route,Redirect,Switch,Link} from "react-router-dom"

export default class TableSection extends Component {
  render() {
    return (
     <Container fluid>
        <Switch>
            <Route exact path={this.props.match.url} component={CategoryTable}/>
            <Route exact path={this.props.match.url+"/categoryedit/:id"} component={CategoryEdit}/>
        </Switch>
     </Container>
    )
  }
}
