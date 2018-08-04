import React, { Component } from 'react'
import {Icon,Grid,Segment,Header,Menu,Divider,Button} from "semantic-ui-react"
import CategoryCard from "./CategoryCard"

export default class TopCategories extends Component {
  constructor(props) {
      super(props)  
      this.data=[
        {category:"Clothings",image:"http://www.nathanflis.com/images/pic/wfWvPD04_908208.jpg"},
        {category:"Cosmetics",image:"https://previews.123rf.com/images/puhhha/puhhha1706/puhhha170600039/79355425-woman-beauty-face-cosmetics-portrait-of-sexy-young-female-model-applying-makeup-loose-blush-with-bru.jpg"},
        {category:"Electronics",image:"http://www.nathanflis.com/images/pic/wfWvPD04_908208.jpg"},
        {category:"Baby Products",image:"http://www.nathanflis.com/images/pic/wfWvPD04_908208.jpg"}
       ] 
      this.cards=[] 
      this.state={showCards:false}
  }

  componentDidMount(){
    this.updateCards()
  }

  updateCards(){
    this.data.map((d)=>{
        let card=(
        <Grid.Column>
            <CategoryCard category={d.category} image={d.image} />
        </Grid.Column>
        )
        this.cards.push(card);
    })
    this.setState({showCards:true})
  }


  
  render() {
    return (
          <Grid stackable padded>
              <Grid.Row  columns={4} style={{margin:"0"}}>
                {this.state.showCards && this.cards.map((card)=>{
                    return card
                })}
              </Grid.Row>
          </Grid>
    )
  }
}
