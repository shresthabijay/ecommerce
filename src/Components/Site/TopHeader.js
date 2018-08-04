import React, { Component } from 'react'
import {Container,Image,Grid,Header} from "semantic-ui-react"
import logo from "../../assets/maniac2.png"

export default class TopHeader extends Component {
  render() {
    return (
      <Container fluid>
        <Grid padded centered columns={1}>
            <Grid.Column computer={3}>
                <Header size="medium">
                    <Image src={logo} size="medium"/> The Maniac
                </Header>
            </Grid.Column>
        </Grid>
      </Container>
    )
  }
}
