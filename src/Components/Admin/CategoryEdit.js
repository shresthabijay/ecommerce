import React, { Component } from 'react'
import {Segment,Ref,Button,Grid,Container,Step,Table,Input,Header,Icon,Form,Label,Checkbox} from "semantic-ui-react"
import axios from "axios"

const steps = [
    {
      key: 'Table',
      title: 'Table',
    },
    {
      key: 'Category',
      active: true,
      icon: 'payment',
      title: 'Category',
      description: 'All the data of categories',
    },
]

export default class CategoryEdit extends Component {
  constructor(props) {
      super(props);
      this.state={name:"",detail:"",isDataRecieved:false,canDelete:false}
  }

  componentDidMount=()=>{
    this.id=this.props.match.params.id

    axios.get("http://localhost:5000/category/findbyid/"+this.id)
    .then((d)=>{
        this.data=d.data
        this.setState({name:this.data.name,detail:this.data.detail,isDataRecieved:true,canDelete:true})
    })
  }
  
  handleChange=(e,{name,value})=>{
    this.setState({[name]:value})
  }
  
  render() {

    return (
      <Container>
        <Step.Group style={{marginBottom:"35px"}}items={steps}/>
        <Segment attached style={{padding:"0",margin:"0"}}>
            <Segment color="olive" attached>
                <Grid>
                    <Grid.Row  columns={2} style={{margin:"0px",padding:"8px 0px"}}>
                        <Grid.Column verticalAlign="middle" width={8}>
                            <Header color="grey">Category Edit</Header>
                        </Grid.Column>
                        <Grid.Column width={8}>
                            <Button floated="right" basic color="orange" compact>Delete</Button>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Segment>
            <Form style={{padding:"20px"}} loading={this.isDataRecieved}>
            <Form.Group>
                <Form.Input  width={8} label="Name" name="name" placeholder="name.." value={this.state.name} onChange={this.handleChange}/>
                <Form.Input   width={8} name="detail" label="Detail" placeholder="detail.." value={this.state.detail} onChange={this.handleChange}/>
            </Form.Group>
            <Form.Button content='Save' color="olive" />
            </Form>  
        </Segment>
      </Container>
    )
  }
}
